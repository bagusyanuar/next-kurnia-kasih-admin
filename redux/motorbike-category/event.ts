import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { FindAll, Create, Delete } from './action'
import { MotorbikeCategory } from "@/model/motorbike.category";
import { mapToMetaPagination } from '@/lib/redux'

const onFindAllEvent = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(FindAll.pending, (state) => {
        state.OnDataFetching = true
    }).addCase(FindAll.fulfilled, (state, { payload }) => {
        console.log(payload);
        const data: Array<any> = payload.data as Array<any>
        const meta: any = payload.meta as any
        state.MotorbikeCategories = mapToMotorbikeCategories(data)
        if (meta !== undefined && meta !== null) {
            const metaPagination = mapToMetaPagination(meta)
            state.Pagination.Page = metaPagination.Page
            state.Pagination.PerPage = metaPagination.PerPage
            state.Pagination.TotalPage = metaPagination.TotalPage
            state.Pagination.Rows = metaPagination.Rows
        }
        state.OnDataFetching = false

    }).addCase(FindAll.rejected, (state, { payload }) => {
        state.OnDataFetching = false
    })
}


const onCreateEvent = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(Create.pending, (state) => {
        state.OnConfirmation = false
        state.OnSaving = true
    }).addCase(Create.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.OnSaving = false
    }).addCase(Create.rejected, (state, { payload }) => {
        console.log(payload);
        state.OnSaving = false
    })
}

const onDeleteEvent = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(Delete.pending, (state) => {
        state.OnConfirmation = false
        state.OnDataFetching = true
    }).addCase(Delete.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.OnDataFetching = false
    }).addCase(Delete.rejected, (state, { payload }) => {
        console.log(payload);
        state.OnDataFetching = false
    })
}

const event = (builder: ActionReducerMapBuilder<TState>) => {
    onFindAllEvent(builder);
    onCreateEvent(builder);
    onDeleteEvent(builder);
}

export default event

function mapToMotorbikeCategories(data: Array<any>): Array<MotorbikeCategory> {
    return data.map((datum) => {
        return {
            ID: datum['id'] as string,
            Name: datum['name'] as string
        }
    })
}