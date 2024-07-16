import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../constants/color'
import React, { Suspense, useState } from 'react'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationIcon } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
import { lazy } from 'react'


const Search = lazy(() => import("../specific/Search") )
const Notification = lazy(() => import("../specific/Notifications"));
const NewGroups = lazy(() => import("../specific/NewGroups"))


const Header = () => {

    const navigate = useNavigate();

    const [isMobile, setisMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false)

    const handleMobile = () => {
        setisMobile((prev)=> !prev);
    }
    const openSearch = () => {
        console.log(isSearch);
        setIsSearch((prev)=> !prev)
     }

    const openNewGroup = () => {
        console.log(isSearch);
        setIsNewGroup((prev)=> !prev)
    }

    const openNotification = () => {
        setIsNotification((prev)=> !prev)
    }

    const navigateToGroup = () => {
        navigate("/groups")
    }

    const LogoutHandler = () => {
        console.log("Logout handler")
    }


    return <>

        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position='static' sx={{ bgcolor: orange }}>

                <Toolbar>

                    <Typography
                        variant='h6'
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                    >

                        Chatter </Typography>

                    <Box sx={{
                        display: { xs: "block", sm: "none" },
                    }}>

                        <IconButton color='inherit' onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>

                    <IconBtn 
                    title={"Search"}
                    icon={<SearchIcon/>}
                    onClick={openSearch}
                    />
                    <IconBtn 
                    title={"New Group"}
                    icon={ <AddIcon />}
                    onClick={openNewGroup}
                    />
                    <IconBtn 
                    title={"Manage Groups"}
                    icon={<GroupIcon />}
                    onClick={navigateToGroup}
                    />

                    
                    <IconBtn 
                    title={"Notifications"}
                    icon={<NotificationIcon/>}
                    onClick={openNotification}
                    />


                    <IconBtn 
                    title={"Logout"}
                    icon={<LogoutIcon/>}
                    onClick={LogoutHandler}
                    />



                    </Box>
                </Toolbar>



            </AppBar>

        </Box>

           
           { isSearch && (
            <Suspense fallback={<Backdrop open/>}>
           <Search/>
           </Suspense>
        )}

           { isNotification && (
            <Suspense fallback={<Backdrop open/>}>
           <Notification/>
           </Suspense>
        )}

           { isNewGroup && (
            <Suspense fallback={<Backdrop open/>}>
           <NewGroups/>
           </Suspense>
        )}


    </>
};

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header
