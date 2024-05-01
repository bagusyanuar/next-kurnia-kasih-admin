'use client'

import React from 'react'
import THead from './components/thead'
import TR from './components/tr'
import TH from './components/th'
import type { TSORT, HeaderSort, TSortOption, ITableHeaderProps } from './util'

const Header = <T,>({
    columns,
    columnSort,
    onColumnSort,
    scroll = false
}: ITableHeaderProps<T>) => {
    return (
        <THead>
            <TR>
                {
                    columns.map((v, k) => {
                        let sort: TSORT | undefined = undefined
                        if (v.sort) {
                            const title: string = v.title
                            const selectedHeader: HeaderSort | undefined = columnSort.find(e => e.key === title)
                            if (selectedHeader) {
                                sort = {
                                    key: selectedHeader.key,
                                    defaultDirection: selectedHeader.defaultDirection,
                                    onSort: (key: string, direction: TSortOption) => {
                                        if (onColumnSort) {
                                            onColumnSort(key, direction)
                                        }
                                    }
                                }
                            }
                        }
                        return <TH
                            key={k}
                            align={v.align}
                            width={v.width}
                            sort={sort}
                            scroll={scroll}
                        >
                            {v.title}
                        </TH>
                    })
                }
            </TR>
        </THead>
    )
}

export default Header