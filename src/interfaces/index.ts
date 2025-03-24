export interface ProgramsInterface {
  name: string;
  id: string;
  shortDescription: string;
  interactive: boolean;
  type: "--name" | "--id";
  source: "winget" | "msstore";
}
