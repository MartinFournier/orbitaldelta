import { AssemblyPart } from '..';

type CommandPart = AssemblyPart & {
  placeholder: number;
};

export class Probe implements CommandPart {
  name = 'Probe Core';
  placeholder = 0;
}
