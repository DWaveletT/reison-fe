import type {
  ProblemListRequest,
  ProblemListResponse,
  ProblemRequest,
  ProblemResponse,
  ProblemSolvedRequest,
  ProblemSolvedResponse,
} from '@/interface'

import { apiFetchDefault } from '@/utils/ofetch'

export const apiProblemList = async (request: ProblemListRequest) => {
  return apiFetchDefault<ProblemListResponse>('/problem/list', {
    method: 'POST',
    body: request,
  })
}

export const apiProblemSolved = async (request: ProblemSolvedRequest) => {
  return apiFetchDefault<ProblemSolvedResponse>('/problem/solved', {
    method: 'POST',
    body: request,
  })
}

export const apiProblem = async (request: ProblemRequest) => {
  return apiFetchDefault<ProblemResponse>('/problem', {
    method: 'POST',
    body: request,
  })
}
