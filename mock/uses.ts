// import { Request, Response } from 'express';
// import moment from 'moment';
// import { parse } from 'url';
//
// // mock tableListDataSource
// const genList = (current: number, pageSize: number) => {
//   const tableListDataSource: API.RuleListItem[] = [];
//
//   for (let i = 0; i < pageSize; i += 1) {
//     const index = (current - 1) * 10 + i;
//     tableListDataSource.push({
//       key: index,
//       disabled: i % 6 === 0,
//       href: 'https://ant.design',
//       avatar: [
//         'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
//         'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
//       ][i % 2],
//       name: `TradeCode ${index}`,
//       owner: '曲丽丽',
//       desc: '这是一段描述',
//       callNo: Math.floor(Math.random() * 1000),
//       status: Math.floor(Math.random() * 10) % 4,
//       updatedAt: moment().format('YYYY-MM-DD'),
//       createdAt: moment().format('YYYY-MM-DD'),
//       progress: Math.ceil(Math.random() * 100),
//     });
//   }
//   tableListDataSource.reverse();
//   return tableListDataSource;
// };
//
// let tableListDataSource = genList(1, 20);
//
// function getUser(req: Request, res: Response, u: string) {
//   let realUrl = u;
//   if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
//     realUrl = req.url;
//   }
//   const { current = 1, pageSize = 10 } = req.query;
//   const params = parse(realUrl, true).query as unknown as API.PageParams &
//     API.UserListItem & {
//     sorter: any;
//     filter: any;
//   };
//
//   let dataSource = [...tableListDataSource].slice(
//     ((current as number) - 1) * (pageSize as number),
//     (current as number) * (pageSize as number),
//   );
//
//   if (params.sorter) {
//     const sorter = JSON.parse(params.sorter);
//     dataSource = dataSource.sort((prev, next) => {
//       let sortNumber = 0;
//       (Object.keys(sorter) as Array<keyof API.RuleListItem>).forEach((key) => {
//         let nextSort = next?.[key] as number;
//         let preSort = prev?.[key] as number;
//         if (sorter[key] === 'descend') {
//           if (preSort - nextSort > 0) {
//             sortNumber += -1;
//           } else {
//             sortNumber += 1;
//           }
//           return;
//         }
//         if (preSort - nextSort > 0) {
//           sortNumber += 1;
//         } else {
//           sortNumber += -1;
//         }
//       });
//       return sortNumber;
//     });
//   }
//   if (params.filter) {
//     const filter = JSON.parse(params.filter as any) as {
//       [key: string]: string[];
//     };
//     if (Object.keys(filter).length > 0) {
//       dataSource = dataSource.filter((item) => {
//         return (Object.keys(filter) as Array<keyof API.RuleListItem>).some((key) => {
//           if (!filter[key]) {
//             return true;
//           }
//           if (filter[key].includes(`${item[key]}`)) {
//             return true;
//           }
//           return false;
//         });
//       });
//     }
//   }
//
//   if (params.name) {
//     dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
//   }
//   const result = {
//     data: dataSource,
//     total: tableListDataSource.length,
//     success: true,
//     pageSize,
//     current: parseInt(`${params.current}`, 10) || 1,
//   };
//
//   return res.json(result);
// }
//
// export default {
//   'GET /server/api/': getUser,
//
// };
