import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardJobHistory from '../../component/CardJobHistory'


const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);


    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
                <Box>
                    {
                        user && user.jobsHistory.map((history, i) => (
                            <CardJobHistory
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                location={history.location}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory