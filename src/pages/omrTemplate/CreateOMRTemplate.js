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
import previewImage from '../../assets/images/template/preview.jpeg';
import './Omr.style.css';

const CreateOMRTemplate = () => {
    const options = "ABCDEFGH";
    const [modal, setModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const [templateName, setTemplateName] = useState({ value: 'Template 1', label: 'Template 1' });
    const [selectedSet, setSelectedSet] = useState({ value: 'A', label: 'A' });
    const [option, setOption] = useState({ value: 4, label: '4' });
    const [question, setQuestion] = useState({ value: 60, label: '46-60' });
    const [setWiseResult, setSetWiseResult] = useState([]);
    const [preview, setPreview] = useState(previewImage);
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
        setPreview(URL.createObjectURL(e));
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
                    Axios.post("/omr/start", {fileName:response.data.fileName})
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

                        <AvGroup>
                            <Label for="name">Template Name *</Label>
                            <AvInput name="templateName" id="templateName" required />
                        </AvGroup>
                        
                        <AvGroup>
                            <Label for="option">Option *</Label>
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
                            <Label for="question">Question *</Label>
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
                            maxSize={1500000}
                            accept="image/*"
                            fileType="scanned image"
                            onFileUpload={files => {
                                setFile(files[0]);
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
                <Col md={6} sm={12}>
                    <TemplateDetails />
                </Col>
                <Col md={6} sm={12}>
                    <div className="col-12 mb-3">
                        <img className="img-thumbnail img-rounded" src={preview}/>
                    </div>
                </Col>
            </Row>
            
            <ToastContainer theme="colored"/>
        </React.Fragment>
    );
};

export default CreateOMRTemplate;
