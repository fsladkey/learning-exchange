import schemas from '../utils/schemas'
import { normalize } from 'normalizr'
import * as APIUtil from '../utils/api_util'

export const RECEIVE_GENERIC_RESOURCES = "RECEIVE_GENERIC_RESOURCES"
export const REMOVE_GENERIC_RESOURCE = "REMOVE_GENERIC_RESOURCE"

export const receiveResources = (resources, resourceType) => ({
  type: RECEIVE_GENERIC_RESOURCES,
  resourceType,
  resources
})

export const removeResource = (resource, resourceType) => ({
  type: RECEIVE_GENERIC_RESOURCES,
  resourceType,
  id: resource.id
})

export const receiveResource = (resource, resourceType) => {
  return receiveResources({ [resource.id]: resource }, resourceType)
}

const dispatchSingleResult = dispatch => response => {
  const result = normalize(response, schemas[resourceType])
  for (let resourceType in result.entities) {
    dispatch(receiveResource(result.entities[resourceType], resourceType))
  }
  return response
}

const dispatchArrayResult = dispatch => response => {
  const result = normalize(response, schemas[resourceType])
  for (let resourceType in result.entities) {
    dispatch(receiveResources(result.entities[resourceType], resourceType))
  }
  return response
}

export const fetchOne = resourceType => id => dispatch => {
  return APIUtil.fetch(`/api/${resourceType}/${id}`)
    .then(dispatchSingleResult(dispatch))
}

export const fetchAll = resourceType => data => dispatch => {
  return APIUtil.fetch(`/api/${resourceType}`)
    .then(dispatchArrayResult(dispatch))
}

export const post = resourceType => data => dispatch => {
  APIUtil.post(`/api/${resourceType}`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch))
}

export const patch = resourceType => data => dispatch => {
  APIUtil.patch(`/api/${resourceType}/${data.id}`, { [resourceType]: data })
    .then(dispatchSingleResult(dispatch))
}

export const destroy = resourceType => id => dispatch => {
  APIUtil.destroy(`/api/${resourceType}/${data.id}`, { [resourceType]: data })
    .then(dispatch(removeResource))
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
