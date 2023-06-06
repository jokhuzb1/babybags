import { Hurricane } from 'react-bootstrap-icons'
import { Truck } from "react-bootstrap-icons";
import { Basket2Fill } from 'react-bootstrap-icons'
import { Phone } from 'react-bootstrap-icons'
import { Telegram } from 'react-bootstrap-icons';
import { Receipt } from 'react-bootstrap-icons';
export const descs = [
    {text:"Быстря доставка",icon:<Hurricane/>},
    {text:"Доставка по странам СНГ", icon:<Truck/>},
    {text:"Принимаем заказы по Телеграм,Инстаграм, Тел ", icon:<Basket2Fill/>},
    {text:"+998973705655", icon:<Phone/>},
    {text: <a href='https://t.me/The_445'>Общаться по телегам, Нажмите здесь</a>,icon:<Telegram/>},
  ];

export const delivery = [
  {text:"Быстро оформим заказ и доставим в ваш город в течении 5-10 дней!",icon:<Basket2Fill/>},
  {text:"Отправляем через карго в течении 3ёх дней! ",icon:<Truck/>},
  {text:"Для квотыоставьте заявку через телегам или почту",icon:<Receipt/>},
  
]