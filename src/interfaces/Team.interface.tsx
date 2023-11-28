
export interface TeamInterface {
  teamName: string;
  members: MemberTeam[];
}

type MemberTeam = {
  name: string;
  group: string;
  role: string;
  contacts: string;
}