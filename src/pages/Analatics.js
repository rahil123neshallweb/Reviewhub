import React from 'react'
import Header from './section/Header'
import Footer from './section/Footer'
import Chart1 from './section/Chart1'
import Chart2 from './section/Chart2'
import Chart3 from './section/Chart3'
import { Select, Space } from 'antd';
import styled from 'styled-components'


const Analatics = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div style={{ paddingBottom: '100px' }}>
            <Header heading="Analatics" back='/' />

            <AnalyticsComponent>

                <div className="chart">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="select-box pt-4">
                                    <Space wrap>
                                        <Select
                                            defaultValue="All"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'Today',
                                                    label: 'Today',
                                                },
                                                {
                                                    value: 'ToMorrow',
                                                    label: 'ToMorrow',
                                                },
                                                {
                                                    value: 'This Week',
                                                    label: 'This Week',
                                                },
                                                {
                                                    value: 'This Month',
                                                    label: 'This Month',
                                                },
                                                {
                                                    value: 'This Years',
                                                    label: 'This Years',
                                                },
                                                {
                                                    value: 'All',
                                                    label: 'All',
                                                },
                                            ]}
                                        />
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="chart1">
                                    <Chart1 />
                                </div>
                                <div className="chart2">
                                    <h3 className='text-center'>OverAll</h3>
                                    <Chart2 />
                                </div>
                                <div className="chart3">
                                    <Chart3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnalyticsComponent>

            <Footer />
        </div>
    )
}


export const AnalyticsComponent = styled.div`

.chart .chart1 {
  border: 1px solid ${({theme}) => theme.color.grayBorder};
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
}

.chart .chart2 {
  border: 1px solid ${({theme}) => theme.color.grayBorder};
  padding: 40px;
  margin-top: 20px;
  border-radius: 20px;
}

.chart .chart3 {
  border: 1px solid ${({theme}) => theme.color.grayBorder};
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
}

.chart .select-box {
  display: flex;
  justify-content: flex-end;
  color: ${({theme}) => theme.color.grayText};
}


`

export default Analatics
