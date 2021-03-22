import React, { Component } from "react";

// 高阶组件
// function HOC(WrappedComponent) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: "44"
//       };
//       this.onChange = this.onChange.bind(this);
//     }

//     onChange = event => {
//       this.setState({
//         name: event.target.value
//       });
//     };

//     render() {
//       const newProps = {
//         name: {
//           value: this.state.name,
//           onChange: this.onChange
//         }
//       };
//       return <WrappedComponent {...this.props} {...newProps} />;
//     }
//   };
// }

// // 使用
// //@HOC
// class Detail extends Component {
//   render() {
//     console.log(this.props, this.props.name, "props");
//     return (
//       <input
//         name="name"
//         {...this.props.name}
//         onChange={() => this.props.name.onChange}
//       />
//     );
//   }
// }

// // class Detail extends Component {
// //   render() {
// //     return (
// //       <div>
// //         Detail
// //         <div>子元素</div>
// //       </div>
// //     );
// //   }
// // }
// //export default Detail;
// export default HOC(Detail);

function proxyHoc(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { value: "44" };
    }

    onChange = (event) => {
      const { onChange } = this.props;
      this.setState(
        {
          value: event.target.value,
        },
        () => {
          if (typeof onChange === "function") {
            onChange(event);
          }
        }
      );
    };

    render() {
      console.log(this.props, "this.props");
      const newProps = {
        value: this.state.value,
        onChange: this.onChange,
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

class Detail extends Component {
  render() {
    console.log(this.props, "props");
    return <input {...this.props}></input>;
  }
}

export default proxyHoc(Detail);
