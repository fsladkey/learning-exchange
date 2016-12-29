import schemas from '../utils/schemas'
import { normalize, arrayOf } from 'normalizr'
import * as APIUtil from '../utils/api_util'

export const RECEIVE_GENERIC_RESOURCES = "RECEIVE_GENERIC_RESOURCES"
export const REMOVE_GENERIC_RESOURCE = "REMOVE_GENERIC_RESOURCE"

export const receiveResources = (resources, resourceType) => ({
  type: RECEIVE_GENERIC_RESOURCES,
  resources,
  resourceType
})

export const removeResource = (resource, resourceType) => ({
  type: RECEIVE_GENERIC_RESOURCES,
  id: resource.id,
  resourceType
})

export const receiveResource = (resource, resourceType) => {
  for (let id in resource) {
    return receiveResources({ [id]: resource[id] }, resourceType)
  }
}

const dispatchSingleResult = (dispatch, resourceType) => response => {
  const result = normalize(response, schemas[resourceType])
  for (let resourceType in result.entities) {
    dispatch(receiveResource(result.entities[resourceType], resourceType))
  }
  return response
}

const dispatchArrayResult = (dispatch, resourceType) => response => {
  const result = normalize(response, arrayOf(schemas[resourceType]))
  for (let resourceType in result.entities) {
    dispatch(receiveResources(result.entities[resourceType], resourceType))
  }
  return response
}

const fetchOne = resourceType => id => dispatch => {
  return APIUtil.fetch(`/api/${resourceType}s/${id}`)
    .then(dispatchSingleResult(dispatch, resourceType))
}

const fetchAll = resourceType => data => dispatch => {
  return APIUtil.fetch(`/api/${resourceType}s`)
    .then(dispatchArrayResult(dispatch, resourceType))
}

const post = resourceType => data => dispatch => {
  return APIUtil.post(`/api/${resourceType}s`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch, resourceType))
}

const patch = resourceType => data => dispatch => {
  return APIUtil.patch(`/api/${resourceType}s/${data.id}`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch, resourceType))
}

const destroy = resourceType => id => dispatch => {
  return APIUtil.destroy(`/api/${resourceType}s/${data.id}`, { [resourceType]: data })
    .then(dispatch(removeResource, resourceType))
}


export function createResourceActions(resourceType) {
  const resourceName =  resourceType[0].toUpperCase() + resourceType.slice(1)
  return {
    [`fetchOne${resourceName}`]: fetchOne(resourceType),
    [`fetchAll${resourceName}s`]: fetchAll(resourceType),
    [`create${resourceName}`]: post(resourceType),
    [`update${resourceName}`]: patch(resourceType),
    [`destroy${resourceName}`]: destroy(resourceType),
  }
}
