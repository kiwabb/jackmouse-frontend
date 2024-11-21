// @ts-ignore
/* eslint-disable */

declare namespace API {
  type UserListItem = {
    /**
     * 主键
     */
    id?: number | null;
    /**
     * 头像
     */
    avatar?: null | string;

    /**
     * 邮箱
     */
    email?: null | string;
    /**
     * 是否可用
     */
    enabled?: boolean | null;
    /**
     * 用户名
     */
    username?: null | string;
    /**
     * 用户昵称
     */
    nickname?: null | string;
    /**
     * 登录密码
     */
    password?: null | string;
    /**
     * 手机号
     */
    phone?: null | string;
    /**
     * 性别
     */
    sex?: boolean | null;
    /**
     * 用户类型
     */
    type?: null | string;
    createBy?: number | null;
    createTime?: null | string;
    updateBy?: number | null;
    updateTime?: null | string;
  };
  type UserList = {
    data?: UserListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
}
