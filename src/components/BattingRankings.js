import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import battingRankings from '../data/battingRankings';

const BattingRankings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  const getMovementIcon = (movement) => {
    if (movement > 0) return <ArrowUpwardIcon sx={{ color: '#22c55e', fontSize: '1rem' }} />;
    if (movement < 0) return <ArrowDownwardIcon sx={{ color: '#ef4444', fontSize: '1rem' }} />;
    return null;
  };

  return (
    <Box sx={{ 
      maxWidth: '100%', 
      p: { xs: 1, sm: 2, md: 3 },
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      {/* <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 2, 
          background: `linear-gradient(45deg, #0a1f40, #ad0773)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: '800',
          letterSpacing: '-0.5px',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
        }}
      >
        BATTING RANKINGS
      </Typography> */}
      <Typography 
        variant="subtitle2" 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 }, 
          color: '#0a1f40',
          fontWeight: '500',
          fontSize: { xs: '0.75rem', sm: '0.875rem' }
        }}
      >
        Last Updated - 17 March 2025
      </Typography>
      
      <TableContainer 
        component={Paper} 
        sx={{ 
          boxShadow: '0 4px 6px -1px rgb(10 31 64 / 0.1), 0 2px 4px -2px rgb(173 7 115 / 0.1)',
          borderRadius: { xs: '12px', sm: '16px' },
          overflow: 'hidden',
          bgcolor: 'white',
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f5f9',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(10, 31, 64, 0.2)',
            borderRadius: '4px',
          },
        }}
      >
        <Table sx={{ minWidth: { xs: 300, sm: 500, md: 650 } }}>
          <TableHead>
            <TableRow sx={{ 
              bgcolor: '#0a1f40',
              '& th': { 
                color: 'white',
                fontWeight: '600',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                letterSpacing: '0.025em',
                borderBottom: '2px solid #0a1f40',
                whiteSpace: 'nowrap',
                p: { xs: 1, sm: 2 }
              }
            }}>
              <TableCell>Pos</TableCell>
              <TableCell>Players</TableCell>
              <TableCell>Runs</TableCell>
              {/* {!isMobile && <TableCell>Average</TableCell>} */}
            </TableRow>
          </TableHead>
          <TableBody>
            {battingRankings.map((row) => (
              <TableRow
                key={row.pos}
                sx={{ 
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(10, 31, 64, 0.02)',
                  },
                  ...(row.pos === 1 && {
                    bgcolor: 'rgba(173, 7, 115, 0.03) !important',
                    '& td': { 
                      py: { xs: 2, sm: 3, md: 4 },
                      borderBottom: `2px solid rgba(173, 7, 115, 0.2)`
                    }
                  }),
                  '& td': { 
                    py: { xs: 1.5, sm: 2, md: 3 },
                    px: { xs: 1, sm: 2 },
                    borderBottom: '1px solid rgba(10, 31, 64, 0.1)'
                  }
                }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: '700',
                        color: row.pos === 1 ? '#ad0773' : '#0a1f40',
                        fontSize: row.pos === 1 
                          ? { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
                          : { xs: '0.875rem', sm: '1rem' },
                      }}
                    >
                      {String(row.pos).padStart(2, '0')}
                    </Typography>
                    {getMovementIcon(row.movement)}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 1, sm: 2, md: 3 }
                  }}>
                    <Avatar 
                     src={row.avatar ? `${process.env.PUBLIC_URL}${row.avatar}` : null}
                      alt={row.playerName}
                      sx={{ 
                        width: row.pos === 1 
                          ? { xs: 50, sm: 70, md: 90 }
                          : { xs: 40, sm: 48, md: 56 },
                        height: row.pos === 1 
                          ? { xs: 50, sm: 70, md: 90 }
                          : { xs: 40, sm: 48, md: 56 },
                        border: row.pos === 1 
                          ? `3px solid rgba(173, 7, 115, 0.2)`
                          : `2px solid rgba(10, 31, 64, 0.1)`,
                        boxShadow: row.pos === 1 
                          ? '0 4px 6px -1px rgba(173, 7, 115, 0.1)'
                          : 'none',
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: row.pos === 1 
                            ? { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                            : { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                          color: '#0a1f40',
                          fontWeight: '500',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word'
                        }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>{row.playerName.split(' ')[0]}</Box>
                        <Box 
                          component="span" 
                          sx={{ 
                            fontWeight: '700',
                            color: row.pos === 1 ? '#ad0773' : '#0a1f40',
                            display: { xs: 'block', sm: 'inline' }
                          }}
                        >
                          {row.playerName.split(' ')[1]}
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography 
                    sx={{ 
                      fontWeight: '700',
                      color: row.pos === 1 ? '#ad0773' : '#0a1f40',
                      fontSize: row.pos === 1 
                        ? { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                        : { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    }}
                  >
                    {row.runs}
                  </Typography>
                </TableCell>
                {/* {!isMobile && (
                  <TableCell
                    sx={{
                      color: 'rgba(10, 31, 64, 0.8)',
                      fontWeight: row.pos === 1 ? '500' : '400',
                      fontSize: row.pos === 1 
                        ? { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                        : { xs: '0.75rem', sm: '0.875rem' },
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {row.careerBest}
                  </TableCell>
                )} */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BattingRankings;