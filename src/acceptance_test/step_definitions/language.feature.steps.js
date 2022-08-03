import {stringify} from "querystring";

const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/language.feature', {tagFilter: '@included'});
import '@testing-library/jest-dom/extend-expect';
import ProjectService from "../../Application/Project/ProjectService";
import LanguageManagement from "../../UI/ProjectManagement/LanguageManagement";
import React from "react";
import userEvent from "@testing-library/user-event";
import DashBoard from "../../UI/WorkSpace/DashBoard";



defineFeature(feature, (test)=> {

    const givenTheUserIsInLanguageTab = (given) => {
        given('the user is on the language tab', (arg0) => {
            let project_service = new ProjectService();
            render(<DashBoard />)
            // render(<LanguageManagement projectService={project_service} />);

            //create new language
            screen.getByRole('listitem', {name: /new language/i}).click()

            //verify that this is the right tab
            expect(screen.getByRole('textbox', {
                name: /enter concrete syntax enter concrete syntax/i
            })).toBeVisible();

        });
    };

    const andUserInsertName = (and) => {
        and(/^the user insert the name (.*)$/, (name) => {
            let allElement = screen.getAllByPlaceholderText("Language name")
            for (let i =0; i < allElement.length; i++){
                if (allElement[i].id === "newLanguageName"){
                    let element = allElement[i]
                    userEvent.type(element, "acceptance_language")
                }
            }
        });
    }

    const andTheUserInsertCorrectAbsSyntax = (and) => {
        and(/^the user insert a correct abstract(.*)$/, (abstractSyntax) => {
            userEvent.type(screen.getByRole('textbox', {
                name: /enter abstract syntax enter abstract syntax/i
            }),abstractSyntax)
        });
    };

    const andTheUserInsertCorrectConSyntax = (and) => {
        and(/^the user insert a correct concrete(.*)$/, (concreteSyntax) => {
            userEvent.type(screen.getByRole('textbox', {
                name: /enter concrete syntax enter concrete syntax/i
            }),concreteSyntax)
        });
    };

    const whenUserClickCreateButton = (when) => {
        when(/^the user clicks the "(.*)" button$/, (create) => {
            let allElement = screen.getAllByRole('button', {name: create})
            for (let i =0; i < allElement.length; i++){
                if (allElement[i].id === "btnCreateLanguage"){
                    let element = allElement[i]
                    element.click()
                }
            }

        });
    };


    test('user creates a language', ({ given, and, when, then }) => {
        givenTheUserIsInLanguageTab(given);

        andUserInsertName(and)

        andTheUserInsertCorrectAbsSyntax(and);

        andTheUserInsertCorrectConSyntax(and)

        whenUserClickCreateButton(when)

        then(/^the new language called (.*) should be added$/, (name) => {
            userEvent.selectOptions(screen.getByRole('combobox', {
                name: /select language/i
            }), '-1');

            // expect(screen.getByText('')).toBeVisible();
            // expect(screen.getByRole('textbox', {
            //     name: /enter concrete syntax enter concrete syntax/i
            // })).toBeVisible();
            expect(1).toBe(0)
        });

    });

    test('user cannot create an existing language', ({ given, and, when, then }) => {
        givenTheUserIsInLanguageTab(given);

        andUserInsertName(and);

        andTheUserInsertCorrectAbsSyntax(and);

        andTheUserInsertCorrectConSyntax(and)

        whenUserClickCreateButton(when)

        then(/^the new language called (.*) should not be added$/, (name) => {
            userEvent.selectOptions(screen.getByRole('combobox', {
                name: /select language/i
            }), '-1');

            // expect(screen.getByText('')).toBeVisible();
            // expect(screen.getByRole('textbox', {
            //     name: /enter concrete syntax enter concrete syntax/i
            // })).toBeVisible();
            expect(1).toBe(0)
        });

    });


});


