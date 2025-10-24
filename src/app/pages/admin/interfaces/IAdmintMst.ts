export interface IExpenseHead {
  id: number;
  expenseHead: string;
  activeStatus: number; // 1 = Active, 0 = Inactive
}


export interface IHouse {
  houseId: number;
  houseName: string;
}

export interface ISalutation{
  salutationId: number;
  salutation: string;
}

export interface ICategory{
  categoryId: number;
  categoryName: string;
}