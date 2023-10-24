import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'


const AdminDashboard = () => {
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.signIn);
    const { jobs } = useSelector((state) => state.loadJobs);
    const { jobType } = useSelector((state) => state.jobTypeAll);

    useEffect(() => {
        
            if (userInfo.user.role === 1) {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <StatComponent
                        value={jobs && jobs.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value={jobType && jobType.length}
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                    />

                </Stack>

            </Box>
        </>
    )
}

export default AdminDashboard