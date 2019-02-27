import React , {Component} from 'react';
import {Table} from "reactstrap";
import GetCategories from "../service/category";


class Categories extends Component {

    constructor(props) {
        super(props);
        this.state={
            categories : [],
        };
    }

    componentDidMount(){
      GetCategories()
      .then(data => {
        this.setState({
            categories: data,
        })
      });
    }

    render() {

        return (
            <div style={{textAlign: "center"}}>
              <Table>
                <thead>
                <tr>
                  <th>Category name</th>
                </tr>
                </thead>
              <thead>
              {this.state.categories.map((category , index) =>
                  <tr>
                      <th key={index}>
                        <a href={"/categories/" + category._id + "/" + category.name}>
                          {category.name}
                        </a>
                      </th>
                  </tr>)}
              </thead>
            </Table>
        </div>

        );
    }
}
export default Categories;