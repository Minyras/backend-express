import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model credit
 *
 */
export type creditModel = runtime.Types.Result.DefaultSelection<Prisma.$creditPayload>;
export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null;
    _avg: CreditAvgAggregateOutputType | null;
    _sum: CreditSumAggregateOutputType | null;
    _min: CreditMinAggregateOutputType | null;
    _max: CreditMaxAggregateOutputType | null;
};
export type CreditAvgAggregateOutputType = {
    id: number | null;
    duration: number | null;
    amount: runtime.Decimal | null;
    interestRate: runtime.Decimal | null;
};
export type CreditSumAggregateOutputType = {
    id: number | null;
    duration: number | null;
    amount: runtime.Decimal | null;
    interestRate: runtime.Decimal | null;
};
export type CreditMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    duration: number | null;
    amount: runtime.Decimal | null;
    interestRate: runtime.Decimal | null;
    status: string | null;
};
export type CreditMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    duration: number | null;
    amount: runtime.Decimal | null;
    interestRate: runtime.Decimal | null;
    status: string | null;
};
export type CreditCountAggregateOutputType = {
    id: number;
    name: number;
    startDate: number;
    endDate: number;
    duration: number;
    amount: number;
    interestRate: number;
    status: number;
    _all: number;
};
export type CreditAvgAggregateInputType = {
    id?: true;
    duration?: true;
    amount?: true;
    interestRate?: true;
};
export type CreditSumAggregateInputType = {
    id?: true;
    duration?: true;
    amount?: true;
    interestRate?: true;
};
export type CreditMinAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    duration?: true;
    amount?: true;
    interestRate?: true;
    status?: true;
};
export type CreditMaxAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    duration?: true;
    amount?: true;
    interestRate?: true;
    status?: true;
};
export type CreditCountAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    duration?: true;
    amount?: true;
    interestRate?: true;
    status?: true;
    _all?: true;
};
export type CreditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which credit to aggregate.
     */
    where?: Prisma.creditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of credits to fetch.
     */
    orderBy?: Prisma.creditOrderByWithRelationInput | Prisma.creditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.creditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` credits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` credits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned credits
    **/
    _count?: true | CreditCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CreditAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CreditSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CreditMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CreditMaxAggregateInputType;
};
export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
    [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredit[P]> : Prisma.GetScalarType<T[P], AggregateCredit[P]>;
};
export type creditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.creditWhereInput;
    orderBy?: Prisma.creditOrderByWithAggregationInput | Prisma.creditOrderByWithAggregationInput[];
    by: Prisma.CreditScalarFieldEnum[] | Prisma.CreditScalarFieldEnum;
    having?: Prisma.creditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreditCountAggregateInputType | true;
    _avg?: CreditAvgAggregateInputType;
    _sum?: CreditSumAggregateInputType;
    _min?: CreditMinAggregateInputType;
    _max?: CreditMaxAggregateInputType;
};
export type CreditGroupByOutputType = {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    amount: runtime.Decimal;
    interestRate: runtime.Decimal;
    status: string;
    _count: CreditCountAggregateOutputType | null;
    _avg: CreditAvgAggregateOutputType | null;
    _sum: CreditSumAggregateOutputType | null;
    _min: CreditMinAggregateOutputType | null;
    _max: CreditMaxAggregateOutputType | null;
};
export type GetCreditGroupByPayload<T extends creditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreditGroupByOutputType[P]>;
}>>;
export type creditWhereInput = {
    AND?: Prisma.creditWhereInput | Prisma.creditWhereInput[];
    OR?: Prisma.creditWhereInput[];
    NOT?: Prisma.creditWhereInput | Prisma.creditWhereInput[];
    id?: Prisma.IntFilter<"credit"> | number;
    name?: Prisma.StringFilter<"credit"> | string;
    startDate?: Prisma.DateTimeFilter<"credit"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"credit"> | Date | string;
    duration?: Prisma.IntFilter<"credit"> | number;
    amount?: Prisma.DecimalFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"credit"> | string;
};
export type creditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type creditWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.creditWhereInput | Prisma.creditWhereInput[];
    OR?: Prisma.creditWhereInput[];
    NOT?: Prisma.creditWhereInput | Prisma.creditWhereInput[];
    name?: Prisma.StringFilter<"credit"> | string;
    startDate?: Prisma.DateTimeFilter<"credit"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"credit"> | Date | string;
    duration?: Prisma.IntFilter<"credit"> | number;
    amount?: Prisma.DecimalFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"credit"> | string;
}, "id">;
export type creditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.creditCountOrderByAggregateInput;
    _avg?: Prisma.creditAvgOrderByAggregateInput;
    _max?: Prisma.creditMaxOrderByAggregateInput;
    _min?: Prisma.creditMinOrderByAggregateInput;
    _sum?: Prisma.creditSumOrderByAggregateInput;
};
export type creditScalarWhereWithAggregatesInput = {
    AND?: Prisma.creditScalarWhereWithAggregatesInput | Prisma.creditScalarWhereWithAggregatesInput[];
    OR?: Prisma.creditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.creditScalarWhereWithAggregatesInput | Prisma.creditScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"credit"> | number;
    name?: Prisma.StringWithAggregatesFilter<"credit"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"credit"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"credit"> | Date | string;
    duration?: Prisma.IntWithAggregatesFilter<"credit"> | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalWithAggregatesFilter<"credit"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"credit"> | string;
};
export type creditCreateInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    duration: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
};
export type creditUncheckedCreateInput = {
    id?: number;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    duration: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
};
export type creditUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type creditUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type creditCreateManyInput = {
    id?: number;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    duration: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
};
export type creditUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type creditUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    interestRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type creditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type creditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
};
export type creditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type creditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type creditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    interestRate?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type creditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    duration?: boolean;
    amount?: boolean;
    interestRate?: boolean;
    status?: boolean;
}, ExtArgs["result"]["credit"]>;
export type creditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    duration?: boolean;
    amount?: boolean;
    interestRate?: boolean;
    status?: boolean;
}, ExtArgs["result"]["credit"]>;
export type creditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    duration?: boolean;
    amount?: boolean;
    interestRate?: boolean;
    status?: boolean;
}, ExtArgs["result"]["credit"]>;
export type creditSelectScalar = {
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    duration?: boolean;
    amount?: boolean;
    interestRate?: boolean;
    status?: boolean;
};
export type creditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "duration" | "amount" | "interestRate" | "status", ExtArgs["result"]["credit"]>;
export type $creditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "credit";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        startDate: Date;
        endDate: Date;
        duration: number;
        amount: runtime.Decimal;
        interestRate: runtime.Decimal;
        status: string;
    }, ExtArgs["result"]["credit"]>;
    composites: {};
};
export type creditGetPayload<S extends boolean | null | undefined | creditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$creditPayload, S>;
export type creditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<creditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreditCountAggregateInputType | true;
};
export interface creditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['credit'];
        meta: {
            name: 'credit';
        };
    };
    /**
     * Find zero or one Credit that matches the filter.
     * @param {creditFindUniqueArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends creditFindUniqueArgs>(args: Prisma.SelectSubset<T, creditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Credit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {creditFindUniqueOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends creditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, creditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Credit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditFindFirstArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends creditFindFirstArgs>(args?: Prisma.SelectSubset<T, creditFindFirstArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Credit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditFindFirstOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends creditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, creditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Credits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credits
     * const credits = await prisma.credit.findMany()
     *
     * // Get first 10 Credits
     * const credits = await prisma.credit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const creditWithIdOnly = await prisma.credit.findMany({ select: { id: true } })
     *
     */
    findMany<T extends creditFindManyArgs>(args?: Prisma.SelectSubset<T, creditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Credit.
     * @param {creditCreateArgs} args - Arguments to create a Credit.
     * @example
     * // Create one Credit
     * const Credit = await prisma.credit.create({
     *   data: {
     *     // ... data to create a Credit
     *   }
     * })
     *
     */
    create<T extends creditCreateArgs>(args: Prisma.SelectSubset<T, creditCreateArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Credits.
     * @param {creditCreateManyArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends creditCreateManyArgs>(args?: Prisma.SelectSubset<T, creditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Credits and returns the data saved in the database.
     * @param {creditCreateManyAndReturnArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends creditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, creditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Credit.
     * @param {creditDeleteArgs} args - Arguments to delete one Credit.
     * @example
     * // Delete one Credit
     * const Credit = await prisma.credit.delete({
     *   where: {
     *     // ... filter to delete one Credit
     *   }
     * })
     *
     */
    delete<T extends creditDeleteArgs>(args: Prisma.SelectSubset<T, creditDeleteArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Credit.
     * @param {creditUpdateArgs} args - Arguments to update one Credit.
     * @example
     * // Update one Credit
     * const credit = await prisma.credit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends creditUpdateArgs>(args: Prisma.SelectSubset<T, creditUpdateArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Credits.
     * @param {creditDeleteManyArgs} args - Arguments to filter Credits to delete.
     * @example
     * // Delete a few Credits
     * const { count } = await prisma.credit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends creditDeleteManyArgs>(args?: Prisma.SelectSubset<T, creditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends creditUpdateManyArgs>(args: Prisma.SelectSubset<T, creditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Credits and returns the data updated in the database.
     * @param {creditUpdateManyAndReturnArgs} args - Arguments to update many Credits.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends creditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, creditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Credit.
     * @param {creditUpsertArgs} args - Arguments to update or create a Credit.
     * @example
     * // Update or create a Credit
     * const credit = await prisma.credit.upsert({
     *   create: {
     *     // ... data to create a Credit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit we want to update
     *   }
     * })
     */
    upsert<T extends creditUpsertArgs>(args: Prisma.SelectSubset<T, creditUpsertArgs<ExtArgs>>): Prisma.Prisma__creditClient<runtime.Types.Result.GetResult<Prisma.$creditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditCountArgs} args - Arguments to filter Credits to count.
     * @example
     * // Count the number of Credits
     * const count = await prisma.credit.count({
     *   where: {
     *     // ... the filter for the Credits we want to count
     *   }
     * })
    **/
    count<T extends creditCountArgs>(args?: Prisma.Subset<T, creditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreditCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditAggregateArgs>(args: Prisma.Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>;
    /**
     * Group by Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends creditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: creditGroupByArgs['orderBy'];
    } : {
        orderBy?: creditGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, creditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the credit model
     */
    readonly fields: creditFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for credit.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__creditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the credit model
 */
export interface creditFieldRefs {
    readonly id: Prisma.FieldRef<"credit", 'Int'>;
    readonly name: Prisma.FieldRef<"credit", 'String'>;
    readonly startDate: Prisma.FieldRef<"credit", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"credit", 'DateTime'>;
    readonly duration: Prisma.FieldRef<"credit", 'Int'>;
    readonly amount: Prisma.FieldRef<"credit", 'Decimal'>;
    readonly interestRate: Prisma.FieldRef<"credit", 'Decimal'>;
    readonly status: Prisma.FieldRef<"credit", 'String'>;
}
/**
 * credit findUnique
 */
export type creditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter, which credit to fetch.
     */
    where: Prisma.creditWhereUniqueInput;
};
/**
 * credit findUniqueOrThrow
 */
export type creditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter, which credit to fetch.
     */
    where: Prisma.creditWhereUniqueInput;
};
/**
 * credit findFirst
 */
export type creditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter, which credit to fetch.
     */
    where?: Prisma.creditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of credits to fetch.
     */
    orderBy?: Prisma.creditOrderByWithRelationInput | Prisma.creditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for credits.
     */
    cursor?: Prisma.creditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` credits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` credits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of credits.
     */
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
/**
 * credit findFirstOrThrow
 */
export type creditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter, which credit to fetch.
     */
    where?: Prisma.creditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of credits to fetch.
     */
    orderBy?: Prisma.creditOrderByWithRelationInput | Prisma.creditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for credits.
     */
    cursor?: Prisma.creditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` credits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` credits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of credits.
     */
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
/**
 * credit findMany
 */
export type creditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter, which credits to fetch.
     */
    where?: Prisma.creditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of credits to fetch.
     */
    orderBy?: Prisma.creditOrderByWithRelationInput | Prisma.creditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing credits.
     */
    cursor?: Prisma.creditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` credits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` credits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of credits.
     */
    distinct?: Prisma.CreditScalarFieldEnum | Prisma.CreditScalarFieldEnum[];
};
/**
 * credit create
 */
export type creditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * The data needed to create a credit.
     */
    data: Prisma.XOR<Prisma.creditCreateInput, Prisma.creditUncheckedCreateInput>;
};
/**
 * credit createMany
 */
export type creditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many credits.
     */
    data: Prisma.creditCreateManyInput | Prisma.creditCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * credit createManyAndReturn
 */
export type creditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * The data used to create many credits.
     */
    data: Prisma.creditCreateManyInput | Prisma.creditCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * credit update
 */
export type creditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * The data needed to update a credit.
     */
    data: Prisma.XOR<Prisma.creditUpdateInput, Prisma.creditUncheckedUpdateInput>;
    /**
     * Choose, which credit to update.
     */
    where: Prisma.creditWhereUniqueInput;
};
/**
 * credit updateMany
 */
export type creditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update credits.
     */
    data: Prisma.XOR<Prisma.creditUpdateManyMutationInput, Prisma.creditUncheckedUpdateManyInput>;
    /**
     * Filter which credits to update
     */
    where?: Prisma.creditWhereInput;
    /**
     * Limit how many credits to update.
     */
    limit?: number;
};
/**
 * credit updateManyAndReturn
 */
export type creditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * The data used to update credits.
     */
    data: Prisma.XOR<Prisma.creditUpdateManyMutationInput, Prisma.creditUncheckedUpdateManyInput>;
    /**
     * Filter which credits to update
     */
    where?: Prisma.creditWhereInput;
    /**
     * Limit how many credits to update.
     */
    limit?: number;
};
/**
 * credit upsert
 */
export type creditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * The filter to search for the credit to update in case it exists.
     */
    where: Prisma.creditWhereUniqueInput;
    /**
     * In case the credit found by the `where` argument doesn't exist, create a new credit with this data.
     */
    create: Prisma.XOR<Prisma.creditCreateInput, Prisma.creditUncheckedCreateInput>;
    /**
     * In case the credit was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.creditUpdateInput, Prisma.creditUncheckedUpdateInput>;
};
/**
 * credit delete
 */
export type creditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
    /**
     * Filter which credit to delete.
     */
    where: Prisma.creditWhereUniqueInput;
};
/**
 * credit deleteMany
 */
export type creditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which credits to delete
     */
    where?: Prisma.creditWhereInput;
    /**
     * Limit how many credits to delete.
     */
    limit?: number;
};
/**
 * credit without action
 */
export type creditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credit
     */
    select?: Prisma.creditSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the credit
     */
    omit?: Prisma.creditOmit<ExtArgs> | null;
};
//# sourceMappingURL=credit.d.ts.map