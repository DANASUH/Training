import React, { useState } from 'react';
// استدعاء مكونات Material UI المطلوبة
import { Accordion, AccordionSummary, AccordionDetails, Switch, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MaterialUIChallenge() {
  // 1. هنا نعرف الـ State اللي بيراقب الزر (تلقائياً يكون false يعني مطفي)
  const [isExpanded, setIsExpanded] = useState(false);

  // 2. دالة تتنفذ لما نضغط على الزر وتغير الحالة
  const handleToggle = (event) => {
    setIsExpanded(event.target.checked);
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', mt: 5 }}>
      
      {/* الأكورديون الأول (للتوضيح فقط زي الصورة) */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" align="center">
           nnnnnnnnnnnnnnnnnnn
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* الأكورديون الثاني اللي داخله زر التحكم */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', justifyContent: 'center' }}>
          
          {/* زر التبديل وربطه بالـ State */}
          <Switch
            checked={isExpanded}
            onChange={handleToggle}
            color="success" // لونه أخضر زي ما هو واضح بالصورة
          />
          
        </AccordionDetails>
      </Accordion>

      {/* البوكس البرتقالي */}
      <Box
        sx={{
          backgroundColor: '#ff9800', // لون برتقالي
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2, // مسافة من فوق
          
          // هنا السر البرمجي: نغير الارتفاع بناءً على قيمة isExpanded
          height: isExpanded ? '200px' : '50px',
          
          // إضافة انتقال ناعم عشان يكبر ويصغر بشكل متحرك مو فجأة
          transition: 'height 0.4s ease-in-out',
        }}
      >
        <Typography variant="body2">
          hello world :)
        </Typography>
      </Box>

    </Box>
  );
}