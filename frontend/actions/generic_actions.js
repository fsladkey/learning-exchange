import schemas from '../utils/schemas'
import { normalize, arrayOf } from 'normalizr'
import * as APIUtil from '../utils/api_util'
import pluralize from 'pluralize'
import camelcase from 'camelcase'

export const RECEIVE_GENERIC_RESOURCES = "RECEIVE_GENERIC_RESOURCES"
export const REMOVE_GENERIC_RESOURCE = "REMOVE_GENERIC_RESOURCE"

export const receiveResources = (resources, resourceType) => ({
  type: RECEIVE_GENERIC_RESOURCES,
  resources,
  resourceType
})

export const removeResource = (resource, resourceType) => ({
  type: REMOVE_GENERIC_RESOURCE,
  id: resource.id.toString(),
  resourceType
})

export const removeResult = (dispatch, resourceType) => response => {
  dispatch(removeResource(response, pluralize(resourceType)))
  return response
}

export const dispatchSingleResult = (dispatch, resourceType) => response => {
  const result = normalize(response, schemas[resourceType])
  for (let resourceType in result.entities) {
    dispatch(receiveResources(result.entities[resourceType], resourceType))
  }
  return response
}

const dispatchArrayResult = (dispatch, resourceType) => response => {
  const schema = { resourceType: [ schemas[resourceType] ]}
  const result = normalize(response, [ schemas[resourceType] ])
  for (let resourceType in result.entities) {
    dispatch(receiveResources(result.entities[resourceType], resourceType))
  }
  return response
}

const fetchOne = resourceType => id => dispatch => {
  return APIUtil.fetch(`/api/${pluralize(resourceType)}/${id}`)
    .then(dispatchSingleResult(dispatch, resourceType))
}

const fetchAll = resourceType => data => dispatch => {
  return APIUtil.fetch(`/api/${pluralize(resourceType)}`, data)
    .then(dispatchArrayResult(dispatch, resourceType))
}

const post = resourceType => data => dispatch => {
  return APIUtil.post(`/api/${pluralize(resourceType)}`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch, resourceType))
}

const patch = resourceType => data => dispatch => {
  return APIUtil.patch(`/api/${pluralize(resourceType)}/${data.id}`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch, resourceType))
}

const destroy = resourceType => id => dispatch => {
  return APIUtil.destroy(`/api/${pluralize(resourceType)}/${id}`)
    .then(removeResult(dispatch, resourceType))
}


export function createResourceActions(resourceType) {
  return {
    [camelcase(`fetch_one_${resourceType}`)]: fetchOne(resourceType),
    [camelcase(`fetch_all_${pluralize(resourceType)}`)]: fetchAll(resourceType),
    [camelcase(`create_${resourceType}`)]: post(resourceType),
    [camelcase(`update_${resourceType}`)]: patch(resourceType),
    [camelcase(`destroy_${resourceType}`)]: destroy(resourceType),
  }
}
