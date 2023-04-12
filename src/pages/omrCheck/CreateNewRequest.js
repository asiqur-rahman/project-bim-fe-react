import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button, InputGroupAddon, Label, FormGroup, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Select,{ components } from 'react-select';
import Axios from '../../helpers/axios.helper';
import Loader from '../../components/Loader';
import FileUploader from './FileUploader';
import PageTitle from '../../components/PageTitle';
import _ from "lodash";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import template1 from '../../assets/images/template/sheet1.jpg';
import './Omr.style.css';

const CreateNewRequest = () => {
    const options = "ABCDEFGH";
    const [modal, setModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const [templateName, setTemplateName] = useState({ value: 'Template 1', label: 'Template 1' });
    const [selectedSet, setSelectedSet] = useState({ value: 'A', label: 'A' });
    const [option, setOption] = useState({ value: 4, label: '4' });
    const [question, setQuestion] = useState({ value: 60, label: '46-60' });
    const [setWiseResult, setSetWiseResult] = useState([]);
    var file ;

    const toastUpdateHelper = (id,msg, type, icon) =>{
        toast.update(id, { render: msg, type: type, isLoading: false , icon:icon?icon:false });
        setTimeout( () => 
            toast.dismiss(id)
        , 2000);
    }

    const handleResultChange=(e,index,value)=>{

        var prevResult = setWiseResult.filter((e)=>e.set==selectedSet.value);
        if(prevResult.length>0){
            setWiseResult.map((data)=>{
                if(data.set==selectedSet.value){
                    data.result[index]=value;
                }
            })
            setSetWiseResult(setWiseResult);
        }
        else{
            var nResult = [];
            nResult[index]=value;
            var newResult={set:selectedSet.value,result:nResult};
            setWiseResult.push(newResult);
            setSetWiseResult(setWiseResult);
        }
    }

    const getSetWiseResult=(index,value)=>{
        var finalResult = false;
        var prevResult = setWiseResult.filter((e)=>e.set==selectedSet.value);
        if(prevResult.length>0){
            prevResult=prevResult[0];
            setWiseResult.forEach(data => {
                if(data.set==selectedSet.value){
                    finalResult = prevResult.result[index]==value;
                }
            });
        }
        return finalResult;
    }

    const setFile = (e)=>{
        file=e;
    }

    const handleSubmit = (event, errors, values)=>{
        if(errors.length>0){
            toast.error("Please fill up required field.");
        }
        else if(!file){
            toast.error("No file found, please upload OMR sheets.");
        }
        else{
            setLoading(true);
            const fpToastId = toast.loading("File is processing for upload.")
            let formData = new FormData();
            formData.append("file",file);

            Axios.post("/file/upload", formData)
            .then(function (response) {
                if(response.data.status==200){

                    toastUpdateHelper(fpToastId, "File processed successfully.", "success");

                    var optoastId = toast.loading("OMR sheet processing started...")
                    Axios.post("/omrCheck/start", {fileName:response.data.fileName})
                    .then(function (response) {
                        if(response.data.status==200){
                            toastUpdateHelper(optoastId, "OMR processed successfully.", "success");
                        }
                        else{
                            toastUpdateHelper(optoastId, response.data.message, "error");
                        }
                    })
                    .catch(function (error) {
                        toastUpdateHelper(optoastId, "OMR processed failed.", "error" );
                    })
                }
            })
            .catch(function (error) {

            })
            setLoading(false);
        }
    }

    const ButtonOption = props => (
        <div className='justify-content-center d-flex flex-row' style={{padding:"0 5px"}}>
          <components.Option {...props}>
            {props.label}
          </components.Option>
          <Button className="btn btn-sm" color="primary" onClick={()=>setModal(!modal)} type="button" style={{minWidth:"40%"}}>
            See Template
            </Button>
        </div>
      );

      const ooptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    const TemplateDetails = () => {
        return (
            <Card>
                <CardBody>
                    <h4 className="header-title mt-0 mb-1">Template Details</h4>
                    <p className="sub-header">Please provide your template details.</p>
                    <AvForm onSubmit={handleSubmit}>
                        {/* <AvField name="name" label="Template Name" value={templateName} onBlur={(e)=>setTemplateName(e.target.value)} type="text" required /> */}

                        <AvGroup>
                            <Label for="name">Template Name</Label>
                            {/* <Select
                                id="name"
                                style={{width:"80%"}}
                                name="name"
                                className="react-select"
                                classNamePrefix="react-select"
                                options={[
                                    { value: 'Template 1', label: 'Template 1' },
                                    { value: 'Template 2', label: 'Template 2' }
                                ]}
                                defaultValue={templateName}
                                onChange={e => {
                                    setTemplateName({
                                        label: e.label,
                                        value: e.value
                                    });
                                }}
                                /> */}
                                <Select
                                    options={ooptions}
                                    components={{ Option: ButtonOption }}
                                />
                                {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
                        </AvGroup>
                        
                        <AvGroup>
                            <Label for="option">Option</Label>
                            <Select
                                id="option"
                                name="option"
                                className="react-select"
                                classNamePrefix="react-select"
                                options={[
                                    { value: 3, label: '3' },
                                    { value: 4, label: '4' },
                                    { value: 5, label: '5' },
                                    { value: 6, label: '6' },
                                    { value: 7, label: '7' },
                                    { value: 8, label: '8' },
                                ]}
                                defaultValue={option}
                                onChange={e => {
                                    setOption({
                                        label: e.label,
                                        value: e.value
                                    });
                                }}
                                ></Select>
                        </AvGroup>

                        <AvGroup>
                            <Label for="question">Question</Label>
                            <Select
                                id="question"
                                name="question"
                                className="react-select"
                                classNamePrefix="react-select"
                                options={[
                                    { value: 30, label: '< 30' },
                                    { value: 45, label: '31-45' },
                                    { value: 60, label: '46-60' },
                                    { value: 75, label: '61-75' },
                                    { value: 90, label: '76-90' },
                                    { value: 105, label: '91-105' },
                                    { value: 120, label: '106-120' },
                                    { value: 135, label: '121-135' },
                                    { value: 150, label: '136-150' },
                                ]}
                                defaultValue={question}
                                onChange={e => {
                                    setQuestion({
                                        label: e.label,
                                        value: e.value
                                    });
                                }}
                                ></Select>
                        </AvGroup>
    
                        <FileUploader
                            minSize={0}
                            maxSize={3500000}
                            accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                            onFileUpload={files => {
                                setFile(files[0])
                            }}
                        />

                        <FormGroup>
                            <AvInput
                                tag={CustomInput}
                                type="checkbox"
                                name="customCheckbox"
                                label="Agree to terms and conditions"
                                required
                            />
                        </FormGroup>
                        {/* <Col md={12} style={{textAlign:"right"}}> */}
                            <Button color="primary" type="submit" style={{float:"right"}}>
                                Submit
                            </Button>
                        {/* </Col> */}
                        
                    </AvForm>
                </CardBody>
            </Card>
        )
    }

    const ResponsiveTable = ({option,question,cSet}) => {
        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col md={8} sm={12}>
                            <h4 className="header-title mt-0 mb-1">OMR Result Template</h4>
                            <p className="sub-header">
                                Here please set your <code>set wise</code> questions result.
                            </p>
                        </Col>
                        <Col md={4} sm={12}>
                            <Row>
                                <Col md={2} className={"customLable"}>
                                    <Label for="set">Set</Label>
                                </Col>
                                <Col md={10}>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        required
                                        options={[
                                            { value: 'A', label: 'A' },
                                            { value: 'B', label: 'B' },
                                            { value: 'C', label: 'C' },
                                            { value: 'D', label: 'D' },
                                            { value: 'E', label: 'E' },
                                            { value: 'F', label: 'F' },
                                        ]}
                                        defaultValue={selectedSet}
                                        onChange={e => {
                                            setSelectedSet({
                                                label: e.label,
                                                value: e.value
                                            });
                                        }}
                                    ></Select>
                                </Col>
                            </Row>
                            
                            
                        </Col>
                    </Row>
                    
    
                    <Table className="mb-0" responsive>
                        <thead>
                            <tr>
                                <th style={{paddingRight:"0rem",paddingLeft:"0rem"}} >#</th>
                                {_.times(option, (i) => (
                                    <th key={i+1+(question/3)+options.charAt(i)} style={{paddingRight:"0rem",paddingLeft:"0rem"}} >{options.charAt(i)}</th>
                                ))}
                                <th style={{paddingRight:"0rem",paddingLeft:"0rem"}} ></th>
    
                                <th style={{paddingRight:"0rem",paddingLeft:"0rem"}} >#</th>
                                {_.times(option, (i) => (
                                    <th key={i+1+(question/3)+(question/3)+options.charAt(i)} style={{paddingRight:"0rem",paddingLeft:"0rem"}} >{options.charAt(i)}</th>
                                ))}
                                <th style={{paddingRight:"0rem",paddingLeft:"0rem"}} ></th>
    
                                <th style={{paddingRight:"0rem",paddingLeft:"0rem"}} >#</th>
                                {_.times(option, (i) => (
                                    <th key={i+1+(question/3)+(question/3)+(question/3)+options.charAt(i)} style={{paddingRight:"0rem",paddingLeft:"0rem"}} >{options.charAt(i)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {_.times(question/3, (index) => {
                                const division=question/3;
                                return (
                                    <tr key={index}>
                                        <th scope="row" style={{paddingRight:"0rem",paddingLeft:"0rem"}}>{index+1}</th>
                                        {_.times(option, (i) => (
                                            // <td style={{paddingRight:"0rem",paddingLeft:"0rem"}}><input type='checkbox' defaultChecked={result[index+1]==options.charAt(i)} onChange={(e)=>handleResultChange(e,index+1,options.charAt(i))}/></td>
                                            <td style={{paddingRight:"0rem",paddingLeft:"0rem"}}><input type='checkbox' defaultChecked={getSetWiseResult(index+1,options.charAt(i))} onChange={(e)=>handleResultChange(e,index+1,options.charAt(i))}/></td>
                                        ))}
                                        <td></td>
                                        <th scope="row" style={{paddingRight:"0rem",paddingLeft:"0rem"}}>{index+1+division}</th>
                                        {_.times(option, (i) => (
                                            <td style={{paddingRight:"0rem",paddingLeft:"0rem"}}><input type='checkbox' defaultChecked={getSetWiseResult(index+1+division,options.charAt(i))} onChange={(e)=>handleResultChange(e,index+1+division,options.charAt(i))}/></td>
                                        ))}
                                        <td></td>
                                        <th scope="row" style={{paddingRight:"0rem",paddingLeft:"0rem"}}>{index+1+division+division}</th>
                                        {_.times(option, (i) => (
                                            <td style={{paddingRight:"0rem",paddingLeft:"0rem"}}><input type='checkbox' defaultChecked={getSetWiseResult(index+1+division+division,options.charAt(i))} onChange={(e)=>handleResultChange(e,index+1+division+division,options.charAt(i))}/></td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    };

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'OMR', path: '/tables/omr' },
                            { label: 'OMR Check', path: '/tables/omr', active: true },
                        ]}
                        title={'OMR Check'}
                    />
                </Col>
            </Row>

            {loading && <Loader />}
            <Row>
                <Col md={4} sm={12}>
                    <TemplateDetails />
                </Col>
                <Col md={8} sm={12}>
                    <ResponsiveTable  option={option.value} question={question.value} cSet={selectedSet.value}/>
                </Col>
            </Row>
            
            <Modal isOpen={modal} toggle={()=>setModal(!modal)}>
                <ModalHeader toggle={()=>setModal(!modal)}>Template</ModalHeader>
                <ModalBody>
                    <div class="col-12 mb-3">
                        <img className="img-thumbnail img-rounded" src={template1}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={()=>setModal(!modal)}>Cancel</Button>
                <Button color="primary" onClick={()=>setModal(!modal)}>Save Changes</Button>
                </ModalFooter>
            </Modal>
            
            <ToastContainer theme="colored"/>
        </React.Fragment>
    );
};

export default CreateNewRequest;
