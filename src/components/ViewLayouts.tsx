import React, {ReactNode} from 'react'

interface IChildren {
  children: ReactNode
}

interface SizeProp {
  size: number
}

const Spacer = ({ size }: SizeProp) => {
  return <div style={{
    display: 'inline',
    flex: size
  }} />
}

const HorizontalSpacer = ({ size }: SizeProp) => {
  return <div style={{
    display: 'inline',
    width: size
  }} />
}

const DynamicSpacer = ({ size }: SizeProp) => {
  return <div style={{ flex: size }} />
}

const VerticalSpacer = ({ size }: SizeProp) => {
  return <div style={{
    height: size
  }} />
}

interface TFlexBoxProps extends IChildren {
  vertical?: boolean,
  justify?: string,
  wrap?: 'wrap'
  margin?: number | string,
  flexBias?: number,
  style?: React.CSSProperties,
  onClick?: () => void,
}
const FlexBox = (props: TFlexBoxProps) => {
  const { children, vertical, justify, margin, style, wrap, flexBias, onClick } = props
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        justifyContent: justify || 'space-around',
        flexWrap: wrap,
        margin,
        flex: flexBias,
        cursor: !!onClick ? 'pointer' : undefined,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const SuspendBox = (props: IChildren) => {
  return (
    <FlexBox vertical={true}>
      <FlexBox>
        {props.children}
      </FlexBox>
    </FlexBox>
  )
}

const SuspendFillBox = (props: IChildren) => {
  return (
    <FlexBox vertical={true} flexBias={1}>
      <FlexBox flexBias={1}>
        {props.children}
      </FlexBox>
    </FlexBox>
  )
}

export {
  IChildren,
  Spacer,
  HorizontalSpacer,
  VerticalSpacer,
  DynamicSpacer,
  FlexBox,
  SuspendBox,
  SuspendFillBox
}