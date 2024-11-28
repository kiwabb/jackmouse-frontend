import { request } from '@umijs/max';

// ---------------------------------
/** 获取用户列表 /api/products/all */
export async function products(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const data = await request('/server/api/basic-system/sysUser/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });

  const result: API.UserList = {
    data: data.data.records,
    total: data.data.totalRow,
    success: true,
  };

  return result;
}
// --------------------

/** 更新规则 PUT /api/User */
export async function updateUser(options?: { [key: string]: any }) {
  return request<API.UserListItem>('/server/api/basic-system/sysUser/update', {
    method: 'PUT',
    data: {
      method: 'update',
      ...(options || {}),
    },
  });
}

/** 新建规则 POST /api/User */
export async function addUser(options?: { [key: string]: any }) {
  return request<API.UserListItem>('/server/api/basic-system/sysUser/save', {
    method: 'POST',
    data: {
      method: 'post',
      ...(options || {}),
    },
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeUser(id: number | undefined, options?: Record<string, any>) {
  return request<Record<string, any>>(`/server/api/basic-system/sysUser/remove/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}