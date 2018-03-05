import {StitchClientFactory} from "mongodb-stitch";
import React, {PureComponent} from "react";
import moment from "moment";
import {Panel} from '../components/ui';
import {Row, Col, Page} from '../components/ui/Layout';


import Input from '../components/ui/Input';

const options = {
    appID: "dashboard-yydnj",
    database: "react",
    collection: "demo",
    timeout: 500
};

let Comp = ({title, children, style, classes}) => (
    <div>
        <section className="panel panel-default">
            {title ? <header className="panel-heading">{title}
                <hr/>
            </header> : null}
            <section className="panel-body text-center" style={style}>
                {children}
            </section>
        </section>
    </div>
);

const Feed = (index, text, numeric, date) => (
    <Comp style={{textAlign: 'left'}} >
        <div key={index} className="media chat-item">
            <div className="media-body">
                <h4 className="media-heading"><b>Text: </b>{text}</h4>
                <h4 className="media-heading"><b>Numeric: </b>{numeric}</h4>
                <h4 className="media-heading"><b>Date: </b>{moment(date, 'DD-MM-YYYY').format("DD.MM.YYYY")}</h4>
            </div>
        </div>
    </Comp>
);

export default class DemoPage extends PureComponent {
    constructor(props) {
        super(props);

        this.fields = {
            text: "",
            numeric: 0,
            date: moment().format()
        };

        this.state = {data: []};
        this.initConnection()
    }

    async initConnection() {
        this.client = await StitchClientFactory.create(options.appID);
        this.db = this.client.service("mongodb", "mongodb-atlas").db(options.database);
        this.collection = this.db.collection(options.collection);
        this.client.login().then(::this.displayData);
    }

    async displayData() {
        const data = await this.client.executeFunction("GetAll");
        this.setState({data});
        setTimeout(() => ::this.displayData(), options.timeout);
    }

    async insertData(event) {
        event.preventDefault();
        const {text, numeric, date} = this.fields;
        const parseDate = moment(date).format('DD-MM-YYYY');

        await this.client.executeFunction("InsertData", text, numeric, parseDate);
        this.inputForm.reset();
    }

    render() {
        const {data} = this.state;

        return (
            <Page height={1000}>
                <Row>
                    <Col size={12}>
                        <Panel title="Create element">
                            <form role="form" className="form-horizontal" onSubmit={::this.insertData}
                                  ref={(form) => this.inputForm = form}>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">Text Field</label>
                                    <Input classes={'col-lg-10'} placeholder="text"
                                           onFieldChange={(event) => this.fields.text = event.target.value}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">Numeric Field</label>
                                    <Input classes={'col-lg-10'} placeholder="number" format={"number"}
                                           onFieldChange={(event) => this.fields.numeric = event.target.value}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">Date Field</label>
                                    <Input classes={'col-lg-10'} placeholder="date" format={"date"}
                                           onFieldChange={(event) => this.fields.date = event.target.value}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2"> </label>
                                    <Input type={"submit"} classes={'col-lg-1'} label="Submit" color="btn-info"/>
                                </div>
                            </form>
                        </Panel>
                    </Col>
                </Row>
                <Row classes={"my-grid"} mason={true}>
                    {data.reverse().map((val, index) => Feed(index, val.text, val.numeric, val.date))}
                </Row>
            </Page>
        );
    }
}
