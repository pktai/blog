---
title: a litle template function on react
date: "2019-08-14T17:14:32.169Z"
categories: ["ReactJS"]
tags: ["ReactJS"]
---

```javascript
import React, { Component } from "react";
import { Col, Form, Row, Button } from "antd";
import "./passenger-setting.scss";
import { actUpsertSetting, actGetPassengerSetting } from "../../actions";
import SettingActionReminder from "../setting-action-reminder";
import SettingActionPassenger from "../setting-action-passenger";
import { SettingActions, ActionStatus } from "../../constants/settingActions";

class PassSetting extends Component {
    constructor() {
        super();
        this.state = {
            availOption: {
                configReminder: [],
                configPax: []
            },
            isRequire: false,
            settingActionState: { ...SettingActions }
        };
    }

    checkRequireItem = data => {
        return data.some(
            item =>
                item.min === "" ||
                item.min === "null" ||
                item.max === "" ||
                item.max === "null"
        );
    };

    componentDidMount() {
        const { settingActionState } = this.state;
        actGetPassengerSetting("PA").then(res => {
            settingActionState.statusOfPAX[
                ActionStatus.email
            ] = this.handleActionPax(
                settingActionState.statusOfPAX,
                res.configReminder,
                ActionStatus.email
            );
            settingActionState.statusOfPAX[
                ActionStatus.callPhone
            ] = this.handleActionPax(
                settingActionState.statusOfPAX,
                res.configReminder,
                ActionStatus.callPhone
            );
            settingActionState.statusOfPAX[
                ActionStatus.sms
            ] = this.handleActionPax(
                settingActionState.statusOfPAX,
                res.configReminder,
                ActionStatus.sms
            );
            this.setState({
                availOption: res,
                settingActionState: settingActionState
            });
        });
    }

    handleActionPax = (dataInit, dataRes, key) => {
        let email = dataRes
            .filter(item => item.action === key)
            .map(item => item.status);
        return dataInit[key].filter(item => !email.includes(item.key));
    };

    handleSubmit = e => {
        e.preventDefault();
        const { availOption } = this.state;
        let isError =
            this.checkRequireItem(availOption.configPax) ||
            this.checkRequireItem(availOption.configReminder);
        this.setState({
            isRequire: isError
        });
        if (isError) {
            return;
        }
        actUpsertSetting("PA", availOption);
    };

    getDataChange = (data, key) => {
        const { availOption } = this.state;
        availOption[key] = data;
        this.setState({
            availOption: { ...availOption }
        });
    };

    render() {
        const { availOption, isRequire, settingActionState } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <h3>Send Email/ Send SMS button expiry setting</h3>
                <Row>
                    <Col>
                        <div className="change-flight">
                            <Col span={16} style={{ paddingLeft: "17%" }}>
                                <SettingActionReminder
                                    form={this.props.form}
                                    getDataChange={this.getDataChange}
                                    configReminder={availOption.configReminder}
                                    isRequire={isRequire}
                                    settingActions={settingActionState}
                                />
                            </Col>
                        </div>
                    </Col>
                </Row>

                <h3>Passenger actions for allocation expiry setting</h3>
                <Row>
                    <Col>
                        <div className="change-flight">
                            <Col span={16} style={{ paddingLeft: "17%" }}>
                                <SettingActionPassenger
                                    form={this.props.form}
                                    getDataChange={this.getDataChange}
                                    configPax={availOption.configPax}
                                    isRequire={isRequire}
                                />
                            </Col>
                        </div>
                    </Col>
                </Row>
                <div className="for-but-set">
                    <Row className="for-but">
                        <Button
                            className="btn-primary"
                            htmlType="submit"
                            icon="save"
                        >
                            Save
                        </Button>
                        <Button className="btn-primary" icon="undo">
                            Cancel
                        </Button>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default Form.create()(PassSetting);
```
```javascript
import React, { Component } from "react";
import { Button } from "antd";
import { SettingActionReminderForm } from "./setting-action-reminder-form";
import "./setting-action-reminder-form";
import { isEmpty, values, groupBy } from "lodash";
import {
    ActionStatus,
    StatusOfPax,
    StateOfPassenger
} from "../../constants/settingActions";

class SettingActionReminder extends Component {
    constructor() {
        super();
        this.state = {
            index: 1,
            settingReminder: [],
            initSetting: { statusOfPAX: { sms: [], email: [], callPhone: [] } },
            statusOfPassenger: [],
            actionOfPassenger: []
        };
    }
    componentDidUpdate(_, preState) {
        const { settingReminder, statusOfPassenger } = this.state;
        const { getDataChange, configReminder, settingActions } = this.props;
        if (preState.settingReminder !== settingReminder) {
            getDataChange(settingReminder, "configReminder");
        }
        if (isEmpty(settingReminder) && !isEmpty(configReminder)) {
            this.setState({
                settingReminder: configReminder
            });
        }
        if (isEmpty(statusOfPassenger) && !isEmpty(StatusOfPax)) {
            this.filterActionPassenger(
                settingActions.actionPax,
                configReminder
            );
            this.setState({
                statusOfPassenger: StatusOfPax,
                initSetting: { ...settingActions }
            });
        }
    }

    add = () => {
        const { form } = this.props;
        const {
            index,
            settingReminder,
            initSetting,
            statusOfPassenger
        } = this.state;
        let filterAction = this.filterActionPax(
            statusOfPassenger[this.setFieldDefault(settingReminder)],
            settingReminder,
            this.setFieldDefault(settingReminder)
        );
        this.setState(
            {
                index: index + 1,
                settingReminder: [
                    ...settingReminder,
                    {
                        action: this.setFieldDefault(settingReminder),
                        status:
                            settingReminder.length > 0
                                ? filterAction[0].key
                                : "allocated",
                        type: "departureTime",
                        min: "",
                        max: "",
                        unit: "minutes"
                    }
                ]
            },
            () => {
                filterAction.shift();
                initSetting.statusOfPAX[
                    this.setFieldDefault(settingReminder)
                ] = filterAction;
                this.setState({
                    initSetting: initSetting
                });
            }
        );

        const keys = form.getFieldValue("settingReminder");
        const nextKeys = keys.concat(index);
        form.setFieldsValue({
            settingReminder: nextKeys
        });
        this.filterActionPassenger(initSetting.actionPax, settingReminder);
    };

    remove = k => {
        const { form } = this.props;
        const { settingReminder, statusOfPassenger, initSetting } = this.state;
        const keys = form.getFieldValue("settingReminder");
        let itemRev = settingReminder.indexOf(k);

        settingReminder.splice(itemRev, 1);
        form.setFieldsValue({
            settingReminder: keys.filter(key => key !== k)
        });
        let filterAction = this.filterActionPax(
            statusOfPassenger[k.action],
            settingReminder,
            this.setFieldDefault(settingReminder)
        );

        initSetting.statusOfPAX[k.action] = filterAction;
        this.setState({
            initSetting: initSetting,
            settingReminder: settingReminder
        });
        this.filterActionPassenger(initSetting.actionPax, settingReminder);
    };

    onChangeHandleFields = async (value, index, key) => {
        const { settingReminder, initSetting, statusOfPassenger } = this.state;
        const { getDataChange } = this.props;
        settingReminder[index][key] = "" + value;
        if (key === "action") {
            settingReminder[index].status =
                initSetting.statusOfPAX[value][0].key;
            initSetting.statusOfPAX[ActionStatus.sms] = this.filterActionPax(
                statusOfPassenger[ActionStatus.sms],
                settingReminder,
                ActionStatus.sms
            );
            initSetting.statusOfPAX[ActionStatus.email] = this.filterActionPax(
                statusOfPassenger[ActionStatus.email],
                settingReminder,
                ActionStatus.email
            );
            initSetting.statusOfPAX[
                ActionStatus.callPhone
            ] = this.filterActionPax(
                statusOfPassenger[ActionStatus.callPhone],
                settingReminder,
                ActionStatus.callPhone
            );
            this.setState({
                initSetting: initSetting
            });
        }
        if (key === "status") {
            const { settingReminder } = this.state;
            let typeStatus = settingReminder[index].action;
            initSetting.statusOfPAX[typeStatus] = this.filterActionPax(
                statusOfPassenger[typeStatus],
                settingReminder,
                typeStatus
            );
            this.setState({
                initSetting: initSetting
            });
        }
        this.setState({
            settingReminder: settingReminder
        });
        this.filterActionPassenger(initSetting.actionPax, settingReminder);
        getDataChange(settingReminder, "configReminder");
    };

    filterActionPax = (init, keys, value) => {
        let resultKeys = keys
            .filter(item => item.action === value)
            .map(ele => ele.status);
        return init.filter(item => {
            return resultKeys.indexOf(item.key) === -1;
        });
    };

    autoChangeAction = (data, key) => {
        return data.filter(item => item.action === key).length;
    };

    setFieldDefault = reminderSetting => {
        if (
            this.autoChangeAction(reminderSetting, ActionStatus.email) <
            StateOfPassenger.length
        ) {
            return ActionStatus.email;
        }
        if (
            this.autoChangeAction(reminderSetting, ActionStatus.sms) <
            StateOfPassenger.length
        ) {
            return ActionStatus.sms;
        }
        if (
            this.autoChangeAction(reminderSetting, ActionStatus.callPhone) <
            StateOfPassenger.length
        ) {
            return ActionStatus.callPhone;
        }
    };

    filterActionPassenger = (initAction, settingRemind) => {
        let mergeState = [
            ...settingRemind.map(item => item.action),
            ...initAction.map(item => item.key)
        ];
        let result = values(groupBy(mergeState))
            .map(i => ({
                key: i[0],
                count: i.length
            }))
            .filter(item => item.count < StateOfPassenger.length + 1);
        this.setState({
            actionOfPassenger: result
        });
    };

    render() {
        const { isRequire, form } = this.props;
        const { getFieldDecorator } = form;
        const { settingReminder, initSetting } = this.state;
        getFieldDecorator("settingReminder", { initialValue: settingReminder });
        return (
            <div style={{ paddingLeft: 20 }}>
                <SettingActionReminderForm
                    settingReminder={settingReminder}
                    isRequire={isRequire}
                    getFieldDecorator={getFieldDecorator}
                    onChangeHandleFields={this.onChangeHandleFields}
                    remove={this.remove}
                    initSetting={initSetting}
                    actionOfPassenger={this.state.actionOfPassenger}
                />

                <div style={{ paddingBottom: 30 }}>
                    <Button
                        type="link"
                        className="btn-link"
                        icon="plus"
                        onClick={this.add}
                        hidden={settingReminder.length >= 24}
                    >
                        Add new rule
                    </Button>
                </div>
            </div>
        );
    }
}

export default SettingActionReminder;


import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Store = () => <h3>Store</h3>
const Courses = () => (
    <div>
        <h3>Courses</h3>
        <ul>
            <li><Link to="/courses/react">React</Link></li>
            <li><Link to="/courses/greensock">GreenSock</Link></li>
        </ul>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
)

const ReactCourse = () => <h3>React</h3>
const GreenSock = () => <h3>GreenSock</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/store',
    component: Store
  },
  { path: '/courses',
    component: Courses,
    routes: [
      { path: '/courses/react',
        component: ReactCourse
      },
      { path: '/courses/greensock',
        component: GreenSock
      }
    ]
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)


const App = () => (
    <Router>
        <div>
        <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/store">Store</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
        </div>
    </Router>
)

export default App;
```