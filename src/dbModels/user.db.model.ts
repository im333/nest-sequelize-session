import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER(255),
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id',
  })
  public id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: '微信id',
    field: 'wxId',
  })
  public wxId: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: 'wxImg',
    field: 'wxImg',
  })
  public wxImg: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: 'nickname',
    field: 'nickname',
  })
  public nickname: string;

  @Column({
    type: DataType.INTEGER(255).UNSIGNED,
    allowNull: false,
    comment: 'allPosts',
    field: 'allPosts',
    defaultValue: '0',
  })
  public allPosts: number;

  @Column({
    type: DataType.INTEGER(255).UNSIGNED,
    allowNull: false,
    comment: 'allReplies',
    field: 'allReplies',
    defaultValue: '0',
  })
  public allReplies: number;

  @Column({
    type: DataType.INTEGER(255).UNSIGNED,
    allowNull: false,
    comment: 'money',
    field: 'money',
    defaultValue: '0',
  })
  public money: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    comment: 'registrationTime',
    field: 'registrationTime',
  })
  public registrationTime: Date;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: 'gender',
    field: 'gender',
  })
  public gender: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: 'province',
    field: 'province',
  })
  public province: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: 'city',
    field: 'city',
  })
  public city: string;
}
