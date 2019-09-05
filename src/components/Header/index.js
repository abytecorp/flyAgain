import React from 'react'
import { Anchor, Input } from './styles'

export const Header = ({ path, emoji = '?' }) => (
  <Anchor href={path}>
    <Input placeholder="destiny"/>
  </Anchor>
)