import styles from './index.less';
import { connect } from 'umi';

function IndexPage(props: any) {
  const {count} = props;

  return (
    <div>
      <h1 className={styles.title}>My tasks {count}</h1>
      <button onClick = {props.plusOne}>Plus</button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.Count.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  plusOne: () => dispatch({ type: 'Count/plus' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
