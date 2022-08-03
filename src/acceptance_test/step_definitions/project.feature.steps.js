import {stringify} from "querystring";

const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/project.feature', {tagFilter: '@included'});
import '@testing-library/jest-dom/extend-expect';
import ProjectService from "../../Application/Project/ProjectService";
import React from "react";
import userEvent from "@testing-library/user-event";
import LanguageManagement from "../../UI/ProjectManagement/LanguageManagement";


defineFeature(feature, (test)=> {


    const givenTheProject = (given) => {
        given(/^a project called (.*)$/, (arg0) => {
            expect(1).toBe(0)
        });
    };

    const whenUserModifyTheProject = (when) =>{
        when(/^the user "(.*)" the project$/, (arg0) => {
            expect(1).toBe(0)
        });
    }

    test('User creates a project', ({ given, when, then }) => {
        givenTheProject(given)

        whenUserModifyTheProject(when)

        then(/^the (.*) should appear in the menu$/, (arg0) => {
            expect(1).toBe(0)
        });
    });


    test('User changes the name of the project', ({ given, when, then }) => {
        givenTheProject(given)

        whenUserModifyTheProject(when)

        then(/^the (.*) should appear in the menu$/, (arg0) => {
            expect(1).toBe(0)
        });

    });


    test('User deletes a project', ({given, when, then}) =>{
        givenTheProject(given)

        whenUserModifyTheProject(when)

        then(/^the user should be sent to "(.*)"$/, (arg0) => {
            expect(1).toBe(0)
        });

    })
});


