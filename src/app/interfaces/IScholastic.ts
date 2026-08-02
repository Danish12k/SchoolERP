export interface IScholasticArea {
  id: number;
  areaName: string;
  groupName: string;
  sessionId: number;
  collegeId: number;
  scholastic: string;
}

export interface ICreateScholasticAreaRequest {
  areaName: string;
  groupName: string;
  sessionId: number;
  collegeId: number;
  scholastic: string;
}

export interface IScholasticAreaListQuery {
  collegeId: number;
  sessionId: number;
  scholastic: string;
  groupName: string;
}

export interface IScholasticSkill {
  skillId: number;
  skillName: string;
  areaName?: string;
  scholasticAreaId?: number;
}

export interface ICreateScholasticSkillRequest {
  skillName: string;
  scholasticAreaId: number;
}

export interface IScholasticSkillListQuery {
  sessionId: number;
  collegeId: number;
  groupName: string;
}
