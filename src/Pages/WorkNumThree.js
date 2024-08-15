import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';
import '../css/dashboard.css';
import { Box, colors } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const barChartsParams = {
  xAxis: [
    {
      data: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      scaleType: 'band',
    },
  ],
  series: [
    { data: [80, 100, 80, 90, 75, 60, 130], label: 'Actual', color: '#E5DB99' },
    { data: [100, 100, 100, 100, 100, 100, 130], label: 'Forecast', color: '#47D045' },
  ],
  borderRadius: 4,
  sx: {
    [`& .${legendClasses.root}`]: {
      display: 'none',
    },
  },
  height: 300,
  width: 1050,
};


function WorkThree() {
  return (
    <div className='container'>
      <div className='headercontent'>
        <h1>Bread</h1>
      </div>
      <div className='contentBox'>
        <Box
          my={2}
          borderRadius={4}
          p={4}
          bgcolor={'white'}
          sx={{ border: '1px solid #e1e1e1', alignContent: 'center' }}>
          <ThumbUpOffAltOutlinedIcon
            sx={{ color: 'green' }} />
          <br />
          <Typography variant='body' >
            Most Popular Bread
          </Typography>
          <Typography variant="h6" component="h2" fontWeight={"bold"}>
            Chicken Floss Bread
          </Typography>

        </Box>
        <Box
          my={2}
          borderRadius={4}
          p={4}
          bgcolor={'white'}
          sx={{ border: '1px solid #e1e1e1', alignContent: 'center' }}>
          <ThumbDownOffAltOutlinedIcon
            sx={{ color: 'red' }} />
          <br />
          <Typography variant='body' >
            Least Popular Bread
          </Typography>
          <Typography variant="h6" component="h2" fontWeight={"bold"}>
            Pineapple Bread
          </Typography>
        </Box>
        <Box
          my={2}
          borderRadius={4}
          p={4}
          bgcolor={'white'}
          sx={{ border: '1px solid #e1e1e1', alignContent: 'center' }}>
          <Typography variant='body' >
            Tomorrow Weather
          </Typography>

          <div className='predict-content'>
            <WbSunnyOutlinedIcon
              sx={{ color: 'orange', fontSize: '80px' }} />
            <Typography variant='h2' fontWeight={"bold"} color={"orange"}>
              Sunny
            </Typography>
          </div>
        </Box>
      </div>
      <div className='graphBox'>
        <Box
          my={1}
          bgcolor={'white'}
          borderRadius={4}
          p={1}
          sx={{ border: '1px solid #e1e1e1', alignContent: 'center' }}>
          <Typography variant='body' fontWeight={"bold"} sx={{ marginLeft: 4 }}>
            Bread Sales as at 20/8/23 to 26/8/23
          </Typography>
          <BarChart
            {...barChartsParams}
            axisHighlight={{ y: "line" }}
          />
        </Box>
        <Box
          my={1}
          borderRadius={4}
          p={2}
          bgcolor={'white'}
          sx={{ border: '1px solid #e1e1e1' }}>
          <Typography variant='body' fontWeight={"bold"}>
            Predicted Amount of Bread to be sold tomorrow
          </Typography>
          <div className='predict-content'>
            <ArrowUpwardIcon
              sx={{ color: 'green', fontSize: '80px' }} />
            <Typography variant='h2' fontWeight={"bold"} color={"green"}>
              20%
            </Typography>
          </div>
          <Typography variant='body' fontWeight={"bold"}>
            Predicted Bread to be baked tomorrow
          </Typography>
          <div className='list-layout'>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ borderBottom: 1 }}>
                  Bread Name
                </ListSubheader>
              }>
              <ListItem>
                <ListItemText
                  primary="Chicken Floss Bread"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Cheese Bread"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Pineapple Bread"
                />
              </ListItem>
            </List>

            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ borderBottom: 1, }}>
                  Qty
                </ListSubheader>
              }>
              <ListItem>
                <ListItemText
                  primary="+20"
                  sx={{ color: 'green' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="+10"
                  sx={{ color: 'green' }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="-20"
                  sx={{ color: 'red' }}
                />
              </ListItem>
            </List>
          </div>
        </Box>
      </div>
    </div>

  );
}




export default WorkThree;