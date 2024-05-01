'use client'

import React from 'react'
import TBody from './components/tbody'
import TR from './components/tr'
import TD from './components/td'
import { ITableBodyProps } from './util'

const Body = <T,>({
    columns,
    data
}: ITableBodyProps<T>) => {
    return (
        <TBody>
            {
                data.map((v, k) => {
                    return <TR key={k}>
                        {
                            columns.map((vColumn, kColumn) => {
                                return <TD
                                    key={kColumn}
                                    align={vColumn.align}
                                >
                                    {vColumn.selector ? vColumn.selector(v, k) : <></>}
                                </TD>
                            })
                        }
                    </TR>
                })
            }
        </TBody>
    )
}

export default Body