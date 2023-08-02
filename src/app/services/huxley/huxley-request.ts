import { debug } from '../debug/debug';
import { Board, CRS, Filter } from './huxley.types';

/** Utility class for generating a URL for making huxley2 requests
 * @example HuxleyRequest.builder()
 *  .board('all')
 *  .startingStation('GLD')
 *  .filter({filterType: 'from', destinationStation: 'WOK'})
 *  .requestedRows(1)
 *  .build();
 */

export class HuxleyRequest {
  private _board!: Board;
  private _fromStation!: CRS;
  private _filter!: Filter;
  private _requestedRows!: number;
  private _expand!: boolean;

  constructor(builder: HuxleyRequestBuilder) {
    this._board = builder.getBoard();
    this._fromStation = builder.getFromStation();
    this._filter = builder.getFilter();
    this._requestedRows = builder.getRequestedRows();
    this._expand = builder.getExpand();
  }

  public static builder(): HuxleyRequestBuilder {
    return new HuxleyRequestBuilder();
  }

  public getRequestURL(): string {
    let request: string = `/${this._board}/${this._fromStation}/`;
    if (this._filter) {
      request = request.concat(
        `${this._filter.filterType}/${this._filter.destinationStation}/`
      );
    }
    if (this._requestedRows) {
      request = request.concat(this._requestedRows.toString());
    }
    if (this._expand) {
      request = request.concat(`?expand=${this._expand}`);
    }
    return request;
  }
}

export class HuxleyRequestBuilder {
  private _board!: Board;
  private _fromStation!: CRS;
  private _filter!: Filter;
  private _requestedRows!: number;
  private _expand!: boolean;

  constructor() {
    //EMTPY
  }

  build(): HuxleyRequest {
    if (!this._board || !this._fromStation) {
      this._board = 'all';
      this._fromStation = 'CLJ';
      debug('warning')(
        'No values provided for "board" or "from station" - default values used'
      );
    }
    return new HuxleyRequest(this);
  }

  board(board: Board): HuxleyRequestBuilder {
    this._board = board;
    return this;
  }

  fromStation(fromStation: CRS): HuxleyRequestBuilder {
    this._fromStation = fromStation;
    return this;
  }

  filter(filter: Filter): HuxleyRequestBuilder {
    this._filter = filter;
    return this;
  }

  requestedRows(requestedRows: number): HuxleyRequestBuilder {
    this._requestedRows = requestedRows;
    return this;
  }

  expand(expand: boolean): HuxleyRequestBuilder {
    this._expand = expand;
    return this;
  }

  public getBoard(): Board {
    return this._board;
  }

  public getFromStation(): CRS {
    return this._fromStation;
  }

  public getFilter(): Filter {
    return this._filter;
  }

  public getRequestedRows(): number {
    return this._requestedRows;
  }

  public getExpand(): boolean {
    return this._expand;
  }
}
