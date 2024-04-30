
import type { RootState } from '@/redux/store'
import type { APIResponse } from './util'

export type ThunkConfig = {
    state: RootState
    rejectValue: APIResponse
}


