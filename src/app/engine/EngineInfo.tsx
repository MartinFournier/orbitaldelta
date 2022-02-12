import React, { useMemo, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Timings } from './useGameLoop';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from '@mui/material';

declare type EngineInfoProps = {
  timings: Timings;
};

const maxRefresh = 50;

export function EngineInfo({ timings }: EngineInfoProps) {
  const [engineTimings, setEngineTimings] = useState<Timings | undefined>(
    timings,
  );

  const throttledTimings = useMemo(
    () =>
      throttle(
        (newTimings: Timings) => setEngineTimings(newTimings),
        maxRefresh,
      ),
    [],
  );
  useEffect(() => throttledTimings(timings), [timings, throttledTimings]);

  if (!engineTimings) return <></>;
  return (
    <TableContainer
      component={Paper}
      sx={{
        m: 1,
        maxWidth: 400,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 50_000,
        border: '1px solid #ccc',
        '& tr td:last-child': { minWidth: 200 },
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Tooltip title="Frames per second">
                <span>FPS</span>
              </Tooltip>
            </TableCell>
            <TableCell>{engineTimings.fps.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Tooltip title="Updates per second">
                <span>UPS</span>
              </Tooltip>
            </TableCell>
            <TableCell>{engineTimings.ups.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Current Frame</TableCell>
            <TableCell>{engineTimings.currentFrameTime.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Previous Frame</TableCell>
            <TableCell>{engineTimings.previousFrameTime.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delta</TableCell>
            <TableCell>
              {(
                engineTimings.currentFrameTime - engineTimings.previousFrameTime
              ).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Engine Started</TableCell>
            <TableCell>{engineTimings.startedOn.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
