import React, { useState } from 'react'
import { Button } from 'antd';
import './plugin.scss'

function Index () {
    const [show, setShow] = useState(false)
    return <div className='antd-content'>
        {show && <iframe className='antd-view' width='600' height='300' src="https://ant.design/components/overview-cn/" frameborder="0" />}
        <Button className='antd-button' type="primary" onClick={() => {setShow(!show)}}>show</Button>
    </div>
}

export default Index