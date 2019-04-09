import Axios from '@/lib/axios.js'

/**
 * 扩容
 * @param servers
 * @param appName
 * @param moduleName
 * @param type
 * @param status
 * @param cache_version
 */
export function expandModule ({servers, appName, moduleName, type = 'expand', status ='1', cache_version}) {
  return Axios({
    method: 'post',
    url: '/cache/expandModule',
    data: {appName, moduleName, servers, type, status, cache_version}
  })
}

/**
 * 获取发布进度
 * @param releaseId
 */
export function getReleaseProgress ({releaseId}) {
  return Axios({
    method: 'get',
    url: '/cache/getReleaseProgress',
    params: {releaseId}
  })
}

export function configTransfer ({appName, moduleName, type = '1', srcGroupName = [], dstGroupName = []}) {
  return Axios({
    method: 'post',
    url: '/cache/configTransfer',
    data: {
      appName,
      moduleName,
      type,
      srcGroupName,
      dstGroupName,
    }
  })
}

/**
 * 获取操作记录
 * @type String 0、1、2 迁移、扩容、缩容
 */
export function getRouterChange ({type = '1'}) {
  return Axios({
    method: 'get',
    url: '/cache/getRouterChange',
    params: {
      type
    }
  })
}

export function hasOperation ({appName, moduleName, type}) {
  return Axios({
    method: 'get',
    url: '/cache/hasOperation',
    params: {
      appName,
      moduleName,
      type,
    }
  })
}

/**
 * 停止迁移、扩容、缩容操作
 * @appName     应用名
 * @moduleName  模块名
 * @type        '0' 是迁移， '1' 是扩容， '2' 是缩容
 * @srcGroupName 原组
 * @dstGroupName 目标组
 * 
 */
export function stopTransfer ({appName = '', moduleName ='', type = '1', srcGroupName = [], dstGroupName = []}) {
  return Axios({
    method: 'post',
    url: '/cache/stopTransfer',
    data: {
      appName,
      moduleName,
      type,
      srcGroupName,
      dstGroupName
    }
  })
}

/**
 * 删除迁移、扩容、缩容操作记录
 * @appName     应用名
 * @moduleName  模块名
 * @type        '0' 是迁移， '1' 是扩容， '2' 是缩容
 * @srcGroupName 原组
 * @dstGroupName 目标组
 * 
 */
export function deleteTransfer ({appName = '', moduleName ='', type = '1', srcGroupName = [], dstGroupName = []}) {
  return Axios({
    method: 'post',
    url: '/cache/deleteTransfer',
    data: {
      appName,
      moduleName,
      type,
      srcGroupName,
      dstGroupName
    }
  })
}

/**
 * 缩容
 * @param appName
 * @param moduleName
 * @param srcGroupName
 */
export function reduceDcache ({appName = '', moduleName ='', srcGroupName = []}) {
  return Axios({
    method: 'post',
    url: '/cache/reduceDcache',
    data: {
      appName,
      moduleName,
      srcGroupName,
    }
  })
}

/**
 * 主备切换
 * @param appName
 * @param moduleName
 * @param groupName
 */
export function switchServer ({appName = '', moduleName ='', groupName = ''}) {
  return Axios({
    method: 'post',
    url: '/cache/switchServer',
    data: {
      appName,
      moduleName,
      groupName,
    }
  })
}

/**
 * 查询主备切换
 * @param appName
 * @param moduleName
 * @param groupName
 */
export function getSwitchInfo ({appName = '', moduleName ='', groupName = ''}) {
  return Axios({
    method: 'get',
    url: '/cache/getSwitchInfo',
    params: {
      appName,
      moduleName,
      groupName,
    }
  })
}


