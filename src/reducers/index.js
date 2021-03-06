import routesSetter from './routesSetter'
import setMainLoadState from './setMainLoadState'
import setSidebarMenuLoadState from './setSidebarMenuLoadState'
import setContentLoadState from './setContentLoadState'
import contentSetter from './contentSetter'
import sidebarMenuSetter from './sidebarMenuSetter'
import setMobileOpen from './setMobileOpen'
import footerSetter from './footerSetter'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    routesData: routesSetter,
    mainLoading: setMainLoadState,
    sidebarMenuLoading: setSidebarMenuLoadState,
    sidebarMenuData: sidebarMenuSetter,
    contentData: contentSetter,
    contentLoading: setContentLoadState,
    mobileOpen: setMobileOpen,
    footerData: footerSetter,
})

export default allReducers