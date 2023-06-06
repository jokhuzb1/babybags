import React from 'react'
import { motion } from 'framer-motion'
import Logo from './utils/Logo'
import ListItems from './helpers/ListItems'
import { descs } from '../../content'
export default function Head({id}) {

  return (
    <motion.section
   
      initial="hidden"
      animate="visible"
      id={id}
      className='head'
    >
      <header>
      <Logo/>
      </header>
    <article>
      <h2>Фабрика сумок из прозрачного ПВХ-материала</h2>
    </article>
    <ListItems lists={descs}/>
    </motion.section>
  )
}
