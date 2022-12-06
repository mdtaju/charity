import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';

import { BsPeople } from 'react-icons/bs';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { RiHandHeartLine } from 'react-icons/ri';
import { TbBuildingWarehouse } from 'react-icons/tb';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
      },
      [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                  backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(10, 81, 116) 50%,rgb(138,35,135) 100%)',

            },
      },
      [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                  backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(10, 81, 116) 50%,rgb(138,35,135) 100%)',
            },
      },
      [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor:
                  theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
      },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      ...(ownerState.active && {
            backgroundImage:
                  'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(10, 81, 116) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            animation: " spin 1s linear infinite"

      }),
      ...(ownerState.completed && {
            backgroundImage:
                  'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(10, 81, 116) 50%, rgb(138,35,135) 100%)',
      }),
}));

function ColorlibStepIcon(props) {
      const { active, completed, className } = props;

      const icons = {
            1: <RiHandHeartLine />,
            2: <MdOutlineDirectionsBike />,
            3: <TbBuildingWarehouse />,
            4: <BsPeople />,
      };

      return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                  {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
      );
}

ColorlibStepIcon.propTypes = {
      /**
       * Whether this step is active.
       * @default false
       */
      active: PropTypes.bool,
      className: PropTypes.string,
      /**
       * Mark the step as completed. Is passed to child components.
       * @default false
       */
      completed: PropTypes.bool,
      /**
       * The label displayed in the step icon.
       */
      icon: PropTypes.node,
};

const steps = ['Your Donation', 'Handover', 'Warehouse', 'Poor People'];

export default function CustomizedSteppers({ TrackStatus = 0 }) {
      return (
            <div className='overflow-scroll sm:overflow-hidden py-6 w-full'>
                  <Stack sx={{ width: '100%' }} spacing={4}>
                        <Stepper alternativeLabel activeStep={TrackStatus} connector={<ColorlibConnector />}>
                              {steps.map((label) => (
                                    <Step key={label}>
                                          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                    </Step>
                              ))}
                        </Stepper>
                  </Stack>
            </div>
      );
}
