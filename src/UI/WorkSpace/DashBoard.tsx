import React, { Component } from "react";
import DiagramEditor from "../DiagramEditor/DiagramEditor";
import ElementsPannel from "../DiagramEditor/ElementsPannel";
import PropiertiesPannel from "../DiagramEditor/PropiertiesPannel";
import ProjectManagement from "../ProjectManagement/ProjectManagement";
import TreeExplorer from "../TreeExplorer/TreeExplorer";
import NavBar from "./navBar";
import ProjectService from "../../Application/Project/ProjectService";
import TreeMenu from "../TreeExplorer/TreeMenu";

interface Props {}
interface State {}

class DashBoard extends Component<Props, State> {
  state = {};
  projectService: ProjectService = new ProjectService();

  // constructor(props: Props) {
  //   super(props);
  // }

  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <ProjectManagement projectService={this.projectService} />

        <div className="row" id="explorer">
          <TreeMenu projectService={this.projectService} />
          <TreeExplorer projectService={this.projectService} />
          <div className="col-sm">
            <NavBar projectService={this.projectService} />
            <div className="row">
              <DiagramEditor projectService={this.projectService} />
              <div
                className="col-2 col-sm-2 distribution-variamos"
                style={{ height: "96vh" }}
              >
                <ElementsPannel projectService={this.projectService} />
                <PropiertiesPannel projectService={this.projectService} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
