import React from 'react'

function RecentProjects() {
    const tableStyle = {
        th: "text-left border-b-[1px] border-[#E2E8F0] font-medium py-4 text-TextColor",
        td: "text-left py-4 font-medium text-TextColor"
    }
  return (
    <table className='w-full'>
        <tr>
            <th className={tableStyle.th}>Name</th>
            <th className={tableStyle.th}>Type</th>
            <th className={tableStyle.th}>Date</th>
            <th className={tableStyle.th}>Duration</th>
            <th className={tableStyle.th}>Status</th>
        </tr>
        <tr>
            <td className={tableStyle.td}>Movie-App</td>
            <td className={tableStyle.td}>Frontend</td>
            <td className={tableStyle.td}>25 Dec 2023 </td>
            <td className={tableStyle.td}>3 hours</td>
            <td className={tableStyle.td}>Complite</td>
        </tr>
        <tr>
            <td className={tableStyle.td}>Food-API</td>
            <td className={tableStyle.td}>Frontend</td>
            <td className={tableStyle.td}>25 Dec 2023 </td>
            <td className={tableStyle.td}>3 hours</td>
            <td className={tableStyle.td}>Complite</td>
        </tr>
        <tr>
            <td className={tableStyle.td}>Food-API</td>
            <td className={tableStyle.td}>Frontend</td>
            <td className={tableStyle.td}>25 Dec 2023 </td>
            <td className={tableStyle.td}>3 hours</td>
            <td className={tableStyle.td}>Complite</td>
        </tr>
        <tr>
            <td className={tableStyle.td}>Food-API</td>
            <td className={tableStyle.td}>Frontend</td>
            <td className={tableStyle.td}>25 Dec 2023 </td>
            <td className={tableStyle.td}>3 hours</td>
            <td className={tableStyle.td}>Complite</td>
        </tr>
    </table>
  )
}

export default RecentProjects