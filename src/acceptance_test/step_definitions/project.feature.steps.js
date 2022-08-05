import {stringify} from "querystring";

const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/project.feature', {tagFilter: '@included'});
import '@testing-library/jest-dom/extend-expect';
import ProjectService from "../../Application/Project/ProjectService";
import React from "react";
import userEvent from "@testing-library/user-event";
import LanguageManagement from "../../UI/ProjectManagement/LanguageManagement";
import DashBoard from "../../UI/WorkSpace/DashBoard";


defineFeature(feature, (test)=> {


    const givenTheProject = (given) => {
        globalThis.project_name = given(/^a project called (.*)$/, (arg0) => {
            return arg0;
        });
    };

    const whenUserModifyTheProject = (when) =>{
        when(/^the user "(.*)" the project$/, (action) => {
            let project_service = new ProjectService();
            render(<DashBoard  projectService={project_service}/>)

            // Different cases : create, change the name, delete, other
            if (action == "creates"){
                let allElement = screen.getAllByRole('textbox')
                for (let i =0; i < allElement.length; i++){
                    if (allElement[i].id === "enterProjectName"){
                        let element = allElement[i]
                        userEvent.type(element, "Project Name")
                    }
                    else if (allElement[i].id === "enterProductLineName"){
                        let element = allElement[i]
                        userEvent.type(element, "Product line name")
                    }
                }
                allElement = screen.getAllByRole('button', {name: "Create"})
                for (let i =0; i < allElement.length; i++){
                    if (allElement[i].id === "createProject"){
                        let element = allElement[i]
                        element.click()
                    }
                }

                screen.debug(undefined,30000)
            }

            else if (action == "changes the name of"){
                console.log('Renamme')

            }
            else if (action  == "deletes"){
                console.log('Delete')
            }
            else {
                throw new Error("Wrong command")
            }
        });
    }

    test('User creates a project', ({ given, when, then }) => {
        givenTheProject(given)
        whenUserModifyTheProject(when)

        then(/^the (.*) should appear in the menu$/, (arg0) => {
        });
    });


    test('User changes the name of the project', ({ given, when, then }) => {
        givenTheProject(given)

        whenUserModifyTheProject(when)

        then(/^the (.*) should appear in the menu$/, (arg0) => {
        });

    });


    test('User deletes a project', ({given, when, then}) =>{
        givenTheProject(given)

        whenUserModifyTheProject(when)

        then(/^the user should be sent to "(.*)"$/, (arg0) => {
        });

    })
});


