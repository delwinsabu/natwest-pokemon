import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import _ from 'lodash';

export default function PokemonInfo(props) {
  const { data } = props;

  let evolution = '';
  const getEvolutions = (row) => {
    evolution = '';

    _.forEach(row.value, function (value) {
      evolution += !_.isEmpty(evolution) ? ',' : '';
      evolution += value.name;
    });
    return evolution;
  };

  const columnDefinition = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'num', headerName: 'Number', width: 110 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'height', headerName: 'Height', width: 110 },
    { field: 'weight', headerName: 'Weight', width: 110 },
    { field: 'weaknesses', headerName: 'Weaknesses', width: 300 },
    {
      field: 'next_evolution',
      headerName: 'Next Evolution',
      width: 200,
      valueGetter: getEvolutions,
    },
  ];
  return (
    <>
      <div style={{ width: '98%', margin: '10px 10px 10px 10px' }}>
        <DataGrid
          rows={_.sortBy(data, [
            function (pokemon) {
              return pokemon.name;
            },
          ])}
          columns={columnDefinition}
          disableColumnMenu={true}
          autoHeight={true}
          pageSize={10}
          rowHeight={40}
          headerHeight={40}
          hideFooterSelectedRowCount={true}
        />
      </div>
    </>
  );
}
