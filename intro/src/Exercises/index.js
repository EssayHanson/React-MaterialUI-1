import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    Paper: { padding: 20, margin: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
}

export default ({ exercises }) => 
   <Grid container>
       <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                <Fragment>
                    <Typography
                        variant="headline"
                        style={{textTransform: "capitalize"}}
                    >
                        {group}
                    </Typography>
                    <List component="ul">
                        {exercises.map(({ title }) => 
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        )}
                    </List>
                </Fragment>
                )}
            </Paper>
       </Grid>
       <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="h4"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ marginTop: 20 }}
                >
                    Please select an exercise from the list on the left.
                </Typography>
            </Paper>
       </Grid>
   </Grid>