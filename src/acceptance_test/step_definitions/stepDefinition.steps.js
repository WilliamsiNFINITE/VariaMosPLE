const { defineFeature, loadFeature} = require("jest-cucumber");
const {render, screen} = require("@testing-library/react");
const feature = loadFeature('src/acceptance_test/external.feature', {tagFilter: '@included and not @excluded'});
import '@testing-library/jest-dom/extend-expect';
import DashBoard from "../../UI/WorkSpace/DashBoard";



defineFeature(feature, (test)=> {
    test('User visits external links', ({ given, when, then }) => {
        let variamos_link = "https://variamos.com/home/variamos-web/";
        let doc_link = "https://github.com/variamosple/VariaMosPLE/wiki";
        given('the user is on the main page', () => {
            render(<DashBoard />);
            expect(screen.getByRole('listitem', {
                name: /home/i
            })).toBeVisible()

        });

        when(/^the user clicks on the button (.*)$/, (button) => {
            //Check the button exists
            if (button == "logo"){
                expect(screen.getByRole('img')).toBeVisible()
            }
            else if (button == "home"){
                expect(screen.getByRole('listitem', {name: /home/i})).toBeVisible()
            }
            else {
                expect(screen.getByRole('listitem', {name: /view docs/i})).toBeVisible()
            }
        });

        then(/^the user should be sent to (.*)$/, (website) => {
            //Check the links
            if (website == "variamos_home"){
                // screen.debug(undefined, 30000)
                // screen.getByRole('')
                console.log(screen.getAllByRole('link', {name : ""})[0])
            }
            else {
                expect(screen.getByRole('link', {name: "What is VariaMos?"})).toHaveAttribute(
                    "href",
                    doc_link)
            }
        });
    });

});


