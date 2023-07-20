
export interface TeamInterface {
  TeamName: string;
  Members: MemberTeam[];
}

type MemberTeam = {
  name: string;
  group: string;
  role: string;
  contacts: string;
}