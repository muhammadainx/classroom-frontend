// import { createSimpleRestDataProvider } from '@refinedev/rest/simple-rest';
// import { API_URL } from './constants';
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import { MOCK_DATA } from '@/constants/mock-data';
import {
  DataProvider,
  BaseRecord,
  GetListParams,
  GetListResponse,
} from '@refinedev/core';

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: MOCK_DATA as unknown as TData[],
      total: MOCK_DATA.length,
    };
  },
  getOne: async () => {
    throw new Error('This function is not present in mock');
  },
  create: async () => {
    throw new Error('This function is not present in mock');
  },
  update: async () => {
    throw new Error('This function is not present in mock');
  },
  deleteOne: async () => {
    throw new Error('This function is not present in mock');
  },

  getApiUrl: () => '',
};
