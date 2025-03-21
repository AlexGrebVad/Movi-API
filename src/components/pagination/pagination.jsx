import React from 'react'
import { Pagination } from 'antd'
import './pagination.css'

export default function PaginationMovi({ current, total, pageSize, onChange }) {
	if (total <= pageSize) return null

	return (
		<div className="pagination">
			<Pagination
				showSizeChanger={false}
				current={current}
				total={total}
				pageSize={pageSize}
				onChange={onChange}
			/>
		</div>
	)
}
